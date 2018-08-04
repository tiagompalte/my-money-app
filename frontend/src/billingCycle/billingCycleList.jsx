import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import formatCurrency from 'format-currency'

import { getList, showUpdate, showDelete } from './billingCycleActions'

const opts = { format: '%s %v', locale:'pt-BR', symbol: 'R$'}
class BillingCycleList extends Component {

  componentWillMount() {
    this.props.getList()
  }

  renderRows() {
    const list = this.props.list || []   
    
    function calculatedConsolidatedValue(bc) {      
      var valueCredits = bc.credits.reduce((prev, cur) => prev + cur.value, 0)
      var valueDebts = bc.debts.reduce((prev, cur) => prev + cur.value, 0)
      return valueCredits - valueDebts
    } 

    function changeTextColor(bc) {
      let value = calculatedConsolidatedValue(bc)

      if(value > 0) {
        return 'cell-green'
      } else if(value < 0) {
        return 'cell-red'
      } else {
        return 'cell-blue'
      }
    }

    return list.map(bc => (
      <tr key={bc._id}>
        <td>{bc.name}</td>
        <td>{bc.month}</td>
        <td>{bc.year}</td>
        <td className={`${changeTextColor(bc)}`}>
          {`${formatCurrency(calculatedConsolidatedValue(bc), opts)}`}
        </td>
        <td>
          <button className='btn btn-warning' onClick={() => this.props.showUpdate(bc)}>
            <i className='fa fa-pencil'></i>
          </button>
          <button className='btn btn-danger' onClick={() => this.props.showDelete(bc)}>
            <i className='fa fa-trash-o'></i>
          </button>
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
              <th>Valor Consolidado</th>
              <th className='table-actions'>Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({list: state.billingCycle.list})

const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)