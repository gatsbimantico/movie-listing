import given from '../framework/logic/gherkin';

export const GENRE_FILTER_CLICKED = 'GENRE_FILTER_CLICKED';
export const initGenreFilterClicked = {};

const storeGenreSelectionChange = (state, action) => ({
  ...state,
  ...{
    [action.id]: action.value,
  },
});

export default given
  .when(GENRE_FILTER_CLICKED)
  .then(storeGenreSelectionChange);
