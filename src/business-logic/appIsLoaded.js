import given from '../framework/logic/gherkin';
import { getGenres, getNowPlaying } from '../site/api';

import { API_IS_LOADED } from './apiIsLoaded';

export const APP_IS_LOADED = 'APP_IS_LOADED';

let inputCalls = 0;

function getApiInput(state, action) {
  if (inputCalls) return state;
  inputCalls++;

  Promise.all([getGenres(), getNowPlaying()])
    .then(([genres, nowPlaying]) =>
      action.dispatch({
        type: API_IS_LOADED,
        genres,
        nowPlaying,
      })
    );

  return state;
}

export default given
  .when(APP_IS_LOADED)
  .then(getApiInput);
