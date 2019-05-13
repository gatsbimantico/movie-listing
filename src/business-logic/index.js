import { combineReducers } from 'redux';

import apiIsLoaded from './apiIsLoaded';
import appIsLoaded from './appIsLoaded';

export default combineReducers({
  apiIsLoaded,
  appIsLoaded,
});
