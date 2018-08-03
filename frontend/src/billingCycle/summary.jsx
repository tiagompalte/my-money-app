import React from 'react'
import formatCurrency from 'format-currency'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

const opts = { format: '%s %v', locale:'pt-BR', symbol: 'R$'}

export default ({credit, debt}) => (
  <Grid cols='12'>
    <fieldset>
      <legend>Resumo</legend>
      <Row>
        <ValueBox cols='12 4' color='green' icon='bank'
                    value={`${formatCurrency(credit, opts)}`} text='Total de Créditos' />
        <ValueBox cols='12 4' color='red' icon='credit-card'
                    value={`${formatCurrency(debt, opts)}`} text='Total de Débitos' />
        <ValueBox cols='12 4' color='blue' icon='money'
                    value={`${formatCurrency(credit - debt, opts)}`} text='Valor Consolidado' />
      </Row>
    </fieldset>
  </Grid>
)