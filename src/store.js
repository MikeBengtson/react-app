import { ADD } from './constants'
import { createStore } from 'redux'

const messageReducer = (state = [], action) => {
    switch (action.type) {
      case ADD:
        return [
          ...state,
          action.message
        ];
      default:
        return state;
    }
  };

const store = createStore(messageReducer);
export default store;