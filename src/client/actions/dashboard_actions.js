import axios from 'axios'
import fetch from 'isomorphic-fetch'
import * as types from '../constants/dashboard_constants'

export function getLittles(searchQuery) {
    return fetch(`http://localhost:8080/api/littles/find?name=${searchQuery.name}`, {
        credentials: 'include',
        method: 'GET',
        headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'no-cache'
    })
    .then(response =>response.json().then(json => ({json, response})))
    .then(({json, response}) => {

        if(!response.ok){
        return Promise.reject(json);
        }
        console.log('json: ', json[0])
        return {
            type: 'LITTLES_SEARCH',
            payload: json[0]
        }
    })

}
