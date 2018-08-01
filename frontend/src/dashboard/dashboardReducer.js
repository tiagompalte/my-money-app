import Actions from '../common/enum/actions'

const INITIAL_STATE = {summary: {credit: 0, debt: 0}}

export default function(state, action) {

  if(!state) {
    state = INITIAL_STATE
  }

  switch(action.type) {
    case Actions.BILLING_SUMMARY_FETCHED:
      return {...state, summary: action.payload.data}
    default:
      return state
  }
}