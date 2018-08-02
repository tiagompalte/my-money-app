import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

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

  return dispatch => {
    axios.post(`${BASE_URL}/billingCycles`, values)
        .then(resp => {
          toastr.success('Sucesso', 'Operação realizada com sucesso')
          dispatch([
            resetForm('billingCycleForm'),
            getList(),
            selectTab('tabList'),
            showTabs('tabList', 'tabCreate')
          ])
        })
        .catch(e => {
          e.response.data.errors.forEach(error => toastr.error('Erro', error))          
        })
  }

}