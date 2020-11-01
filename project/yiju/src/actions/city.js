import store from 'store';

import * as actions from '../constants/city';

export function init(city) {
  store.set('city', city);

  return {
    type: actions.INIT_CITY,
    payload: city,
  };
}

export function update(city) {
  store.set('city', city);

  return {
    type: actions.UPDATE_CITY,
    payload: city,
  };
}
