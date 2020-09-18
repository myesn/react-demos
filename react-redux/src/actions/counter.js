import * as actions from '../constants';

export function increment(step) {
  return {
    type: actions.increment,
    payload: {
      step,
    },
  };
}

export function decrement(step) {
  return {
    type: actions.decrement,
    payload: {
      step,
    },
  };
}
