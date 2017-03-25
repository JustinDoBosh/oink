import * as types from '../constants/dashboard_constants'

const initialIndexState = {
    littles: []
}

function dashboard(state = initialIndexState, action) {
    switch(action.type) {

        case types.SEARCH_REQUEST_SUCCESS:
            return {
                ...state,
                littles: action.payload.results
            }
        
        case types.SEARCH_REQUEST_FAILURE:
            return {
                ...state
            }

        default:
            return state
    }
}


export default dashboard