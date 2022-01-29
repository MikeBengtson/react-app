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

export const store = createStore(messageReducer);