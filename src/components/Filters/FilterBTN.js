import React from 'react'

const FilterBTN = ({ name, index, items, task, setPageNumber }) => {
  return (
    <div>
      <style jsx>
        {`
        .x: checked + label{
          background-color: #0b5ed7;
          color: white;

        }
        input[type="radio"] {
          display: none;
        }
        `}
      </style>
      <div className="form-check">
        <input 
          onClick={() => {
            setPageNumber(1);
            task(items);
          }}
          className="form-check-input x" 
          type="radio" 
          name={name}
          id={`${name}-${index}`} 
        />
        <label 
          className="btn btn-outline-primary" 
          for={`${name}-${index}`} 
        >
          {items}
        </label>
      </div>

      <div className="form-check">
        <input 
          className="form-check-input" 
          type="radio" 
          name="flexRadioDefault" 
          id="flexRadioDefault2" checked 
        />
        <label 
          className="btn btn-outline-primary"
          for="btn-check-outlined"
        >
          Default checked radio
        </label>
      </div>
    </div>
  )
}

export default FilterBTN
