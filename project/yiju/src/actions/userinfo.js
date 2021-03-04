import * as userActions from '../constants/userinfo'

export function signInUser(user) {
  return {
    type: userActions.SIGNINED_USER,
    payload: user
  }
}

export function updateUser(user) {
  return {
    type: userActions.SIGNINED_UPDATE,
    payload: user
  }
}