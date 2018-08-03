import Actions from '../common/enum/actions'

const userKey = '_mymoney_user' 

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem(userKey)),
  validToken: false
}

export default (state, action) => {

  if(!state) {
    state = INITIAL_STATE
  }

  switch (action.type) {
    case Actions.TOKEN_VALIDATED: 
      if (action.payload) {
        return { ...state, validToken: true }
      } else {
        localStorage.removeItem(userKey)
        return { ...state, validToken: false, user: null }
      }
    case Actions.USER_FETCHED:
      localStorage.setItem(userKey, JSON.stringify(action.payload)) 
      return { ...state, user: action.payload, validToken: true }
    default:
      return state
  }
}