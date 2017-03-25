import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import enrollment from './enrollment_reducer'
import dashboard from './dashboard_reducer'

const rootReducer = combineReducers({
  routing,
  enrollment,
  dashboard
});

export default rootReducer;