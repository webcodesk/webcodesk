import { combineReducers } from 'redux';
// import appTemplate from './appTemplate/reducer';
import user from './user/reducer';
import panel from './panel/reducer';
import runtime from './runtime/reducer';

export default combineReducers({
  // appTemplate,
  user,
  panel,
  runtime,
});
