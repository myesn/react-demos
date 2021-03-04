import * as userActions from '../constants/userinfo'

const initState = {};
export default function userinfo(state = initState, action) {
  switch (action.type) {
    case userActions.SIGNINED_USER:
      return action.payload;
    case userActions.SIGNINED_UPDATE:
      return action.payload;
    default:
      return state;
  }
}