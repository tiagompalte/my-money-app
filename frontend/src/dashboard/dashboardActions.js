import axios from 'axios'

import Actions from '../common/enum/actions'

const BASE_URL = 'http://localhost:3003/api'

export function getSummary() {
  const request = axios.get(`${BASE_URL}/billingCycles/summary`)
  return {    
    type: Actions.BILLING_SUMMARY_FETCHED,
    payload: request
  }
}