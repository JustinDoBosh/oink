import * as types from '../constants/dashboard_constants'

const initialDashboardState = {
    littles: {}
}

function dashboard(state = initialDashboardState, action) {
    switch(action.type) {

        case types.LITTLES_SEARCH:{
            const results = action.payload
            let user = {
                name: '',
                email: ''
            }
            Object.keys(results).forEach(function(key) {
                user[key] = results[key]
                console.log(key, results[key]);
            });
            
            //console.log('user: ', JSON.parse(user))
            return Object.assign({}, state, {littles: {name: results.name}})}

        default:
            return {...state}
    }
}


export default dashboard