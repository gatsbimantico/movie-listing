import { createStore } from 'redux';

import rootReducer from '../business-logic';

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState
  );
}
