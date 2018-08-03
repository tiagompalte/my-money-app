import Actions from '../common/enum/actions'

const INITIAL_STATE = { list: [] }

export default (state, action) => {

  if(!state) {
    state = INITIAL_STATE
  }

  if(action.type === Actions.BILLING_CYCLES_FETCHED) {
    return { ...state, list: action.payload.data }
  }

  return state
}