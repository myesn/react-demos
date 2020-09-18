import * as actions from '../constants';

const counter = (counter = 0, action) => {
  switch (action.type) {
    case actions.increment:
      return counter + action.payload.step;
    case actions.decrement:
      return counter - action.payload.step;
    default:
      return counter;
  }
};

export default counter;
