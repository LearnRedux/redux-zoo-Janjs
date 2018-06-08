import { RECEIVE_ANIMAL } from '../actions';
import { BREAK_OUT } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ANIMAL:
      return [...state.filter(animal => state[0].name !== action.animal.name), action.animal];
    case BREAK_OUT:
      return [...state.filter(animal => state[0].name !== action.animal.name), action.animal];
    default:
      return state;
  }
};
