import axios from 'axios'
import * as types from '../constants/dashboard_constants'

export function search(searchQuery) {
    console.log('searchQuery: ', searchQuery)
    axios.get('api/littles/findAll', {
        params: {
            name: searchQuery.name,
            age: searchQuery.age,
            zipCode: searchQuery.zipCode
        }
    })
    .then(function (response) {
        console.log('search response: ', response)
        return {
            type: SEARCH_REQUEST_SUCCESS,
            payload: response
        }
    })
    .catch(function (error) {
        return {
            type: SEARCH_REQUEST_FAILURE,
            payload: error
        }
    })
}

