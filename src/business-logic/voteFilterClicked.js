import given from '../framework/logic/gherkin';

export const VOTE_FILTER_CLICKED = 'VOTE_FILTER_CLICKED';
export const initVoteFilterClicked = {
  selectedVote: 0,
};

const storeApiInput = (state, action) => ({
  ...state,
  selectedVote: action.vote,
});

export default given
  .when(VOTE_FILTER_CLICKED)
  .then(storeApiInput);
