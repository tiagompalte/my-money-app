import React from 'react'

export default props => (
  <select {...props.input}
    className='form-control'>
    <option key="default" />
    {props.options.map(op => (
      <option value={op.value} key={op.value}>
        {op.label}
      </option>
    ))}
  </select>
)