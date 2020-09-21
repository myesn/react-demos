import * as actions from '../constants';

// export function increment(step) {
//   return {
//     type: actions.increment,
//     payload: {
//       step,
//     },
//   };
// }

export function increment(step) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: actions.increment,
        payload: {
          step,
        },
      });
    }, 2000);
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
