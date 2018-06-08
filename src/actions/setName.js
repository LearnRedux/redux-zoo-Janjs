export const SET_NAME = 'SET_NAME';
export const setName = (name) => ({
  type: SET_NAME,
  name
});

export const SET_PRESENCE_FILTER = 'SET_PRESENCE_FILTER';
export const setPresenceFilter = (filter) => ({
  type: SET_PRESENCE_FILTER,
  filter
});

export const RECEIVE_ANIMAL = 'RECEIVE_ANIMAL';
export const receiveAnimal = (name) => ({
  type: RECEIVE_ANIMAL,
  animal: {
    name,  
    present: true
  }
});

export const BREAK_OUT = 'BREAK_OUT';
export const breakOut = (name) => ({
  type: BREAK_OUT,
  animal: {
    name,  
    present: false
  }
});
