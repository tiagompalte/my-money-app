import Actions from '../enum/actions'

const INITIAL_STATE =  { selected: '', visible: {} }

export default (state, action) => {
  
  if(!state) {
    state = INITIAL_STATE
  }

  switch(action.type) {
    case Actions.TAB_SELECTED:
      return { ...state, selected: action.payload }
    case Actions.TAB_SHOWED:
      return { ...state, visible: action.payload}
    default:
      return state
  }
}