import given from '../framework/logic/gherkin';

export const API_IS_LOADED = 'API_IS_LOADED';
export const initApiIsLoaded = {
  genres: [],
  nowPlaying: {
    results: [],
  },
};

const storeApiInput = (state, action) => ({
  ...state,
  ...action.genres,
  nowPlaying: action.nowPlaying,
});

export default given
  .when(API_IS_LOADED)
  .then(storeApiInput);
