import * as actions from "../constants/collect";

const initState = [];
export default function collect(state = initState, action) {
  switch (action.type) {
    case actions.COLLECT:
      return [...state, action.payload];
    case actions.UNCOLLECT:
      return [...state.filter(x => x !== action.payload)];
    default :
      return state
  }
}