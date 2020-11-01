import * as actions from '../constants/city';

export function init(city) {
  return {
    type: actions.INIT_CITY,
    payload: city,
  };
}

export function update(city) {
  return {
    type: actions.UPDATE_CITY,
    payload: city,
  };
}
