import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import dashboard from './dashboard_reducer'

const rootReducer = combineReducers({
  routing,
  dashboard
});

export default rootReducer;