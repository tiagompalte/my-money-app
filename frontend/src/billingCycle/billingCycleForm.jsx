import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import LabelAndInput from '../common/form/labelAndInput'
import { init } from './billingCycleActions'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {

  calculateSummary() {

    let credits = this.props.credits && this.props.credits.length > 0 ? this.props.credits : [{value: 0}]
    let debts = this.props.debts && this.props.debts.length > 0 ? this.props.debts : [{value: 0}]

    const sum = (t, v) => t + v 
    return {
      sumOfCredits: credits.map(c => +c.value || 0).reduce(sum),
      sumOfDebts: debts.map(d => +d.value || 0).reduce(sum) 
    }
  }

  render() {

    const { handleSubmit, readOnly, credits, debts } = this.props
    const { sumOfCredits, sumOfDebts } = this.calculateSummary()

    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field name='name' component={LabelAndInput}
                  label='Nome' cols='12 4' placeholder='Informe o nome' readOnly={readOnly}
          />
          <Field name='month' component={LabelAndInput} type='number'
                  label='Mês' cols='12 4' placeholder='Informe o mês' readOnly={readOnly}
          />
          <Field name='year' component={LabelAndInput} type='number'
                  label='Ano' cols='12 4' placeholder='Informe o ano' readOnly={readOnly}
          />
          <Summary credit={sumOfCredits} debt={sumOfDebts} />
          <ItemList cols='12 6' list={credits} readOnly={readOnly} 
                    field='credits' legend='Créditos'
          />
          <ItemList cols='12 6' list={debts} readOnly={readOnly} 
                    field='debts' legend='Débitos' showStatus={true}
          />
        </div>
        <div className='box-footer'>
          <button type='submit' className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
        </div>
      </form>
    )
  }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'), 
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)