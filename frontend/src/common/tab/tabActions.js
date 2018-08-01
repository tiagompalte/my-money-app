import Actions from '../enum/actions'

export function selectTab(tabId) {  
  return {
    type: Actions.TAB_SELECTED,
    payload: tabId
  }
}

export function showTabs(...tabIds) {
  const tabsToShow = {}
  tabIds.forEach(e => tabsToShow[e] = true) 
  return {
    type: Actions.TAB_SHOWED,
    payload: tabsToShow
  }
}