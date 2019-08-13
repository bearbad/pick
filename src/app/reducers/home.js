import * as actions from '../actions/actionTypes';

export function userInfo (state = { token: "init" }, action = {}) {
  switch (action.type) {
    case actions.USER_INFO_TODO: {
      if (action.data) {
        return {
          token: action.data.token
        }
      }
      return state
    }
    default:
      return state
  }
}

export function other (state = "123456789", action = {}) {
  switch (action.type) {
     case actions.OTHER_TODO:
      return state
     default:
      return state
  }
}

export default {
  userInfo,
  other
}
