import * as actions from '../constants/city';

const initState = '';

export default function city(state = initState, action) {
  switch (action.type) {
    case actions.INIT_CITY:
      return action.payload;
    case actions.UPDATE_CITY:
      return action.payload;
    default:
      return state;
  }
}
