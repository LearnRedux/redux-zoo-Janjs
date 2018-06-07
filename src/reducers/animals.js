import { RECEIVE_ANIMAL } from '../actions';
import { BREAK_OUT } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ANIMAL:
      return action.animal;
    case BREAK_OUT:
      return action.name;
    default:
      return state;
  }
};
