function userInfo (state = {
  token: "init"
}, action) {
  switch (action.type) {
    case 'USER_INFO_TODO': {
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

function other (state = "123456789", action) {
  switch (action.type) {
     case 'OTHER_TODO':
      return state
     default:
      return state
  }
}

export const stores = {
    userInfo,
    other,
}
