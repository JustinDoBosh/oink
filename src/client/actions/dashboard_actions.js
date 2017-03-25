import axios from 'axios'
import * as types from '../constants/dashboard_constants'

export function search() {

    const request = axios.get('api/littles/findAll', {
        params: {
        
        }
    })
    .then(function (response) {
        return {
            type: SEARCH_REQUEST_SUCCESS,
            payload: request
        }
    })
    .catch(function (error) {
        return {
            type: SEARCH_REQUEST_FAILURE,
            payload: request
        }
    })
}

