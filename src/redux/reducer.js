import { combineReducers } from 'redux';
import sessionReducer from './session';
import dashboard from './dashboard';
import planningReducer from './planning/planningReducers';

export default combineReducers({
  session: sessionReducer,
  dashboard: dashboard.dashboardReducer,
  planning: planningReducer
});
