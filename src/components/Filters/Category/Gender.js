import React from 'react'

const Gender = ({ setPageNumber, setGender }) => {
  let genders = [
    'female', 
    'male', 
    'genderless', 
    'unknown'
  ]
  return (
    <div>
      <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingOne">
        <button 
        className="accordion-button" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#panelsStayOpen-collapseOne" 
        aria-expanded="false" 
        aria-controls="panelsStayOpen-collapseOne"
        >
          Gender
        </button>
      </h2>
      <div 
        id="panelsStayOpen-collapseOne" 
        className="accordion-collapse collapse" 
        aria-labelledby="panelsStayOpen-headingOne"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((items, index) => (
            <FilterBTN
              task={setGender}
              setPageNumber={setPageNumber}
              key={index} 
              name="gender"
              index={index} 
              items={items}
            />
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Gender
