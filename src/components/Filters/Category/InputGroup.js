import React from 'react'

const InputGroup = ({ total, name, setID }) => {
  console.log([...Array(total).keys])
  return (
    <div class="input-group mb-3">
      <select 
      onChange={e=>setID(e.target.value)}
      class="form-select" id={name}>
        <option selected>Choose...</option>

        {[...Array(total).keys].map(idx => {
          return (
            <option value={idx+1}>
              {name} - {idx+1}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default InputGroup
