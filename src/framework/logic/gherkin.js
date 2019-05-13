export default {
  when: (...actionTypes) => ({
    then: (...callbacks) =>
      (state = {}, action = {}) => (
        actionTypes.indexOf(action.type) !== -1
          ? callbacks.reduce((newState, callback) => callback(newState, action), state)
          : state
      ),
  }),
};
