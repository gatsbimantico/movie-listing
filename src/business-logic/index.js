import { combineReducers } from 'redux';

import apiIsLoaded from './apiIsLoaded';
import appIsLoaded from './appIsLoaded';
import genreFilterClicked from './genreFilterClicked';
import voteFilterClicked from './voteFilterClicked';

export default combineReducers({
  apiIsLoaded,
  appIsLoaded,
  genreFilterClicked,
  voteFilterClicked
});
