import * as actions from '../constants/collect';

export function addCollect(id) {
  return {
    type: actions.COLLECT,
    payload: id
  };
}

export function removeCollect(id) {
  return {
    type: actions.UNCOLLECT,
    payload: id
  };
}