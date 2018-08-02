import axios from 'axios'
import Actions from '../common/enum/actions'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`)
  return {
    type: Actions.BILLING_CYCLES_FETCHED,
    payload: request
  }
}

export function create(values) {
  
}