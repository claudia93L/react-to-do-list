import { combineReducers } from 'redux';
import usernameReducer from './usernameReducer';
import tasksReducer from './tasksReducer';

const rootReducer = combineReducers({
  username: usernameReducer,
  tasks: tasksReducer,
});

export default rootReducer;
