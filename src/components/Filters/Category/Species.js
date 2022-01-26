import React from 'react'
import FilterBTN from '../FilterBTN';

const Species = ({ setPageNumber, setSpecies }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div>
      <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
        <button 
          className="accordion-button collapsed" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#panelsStayOpen-collapseTwo" 
          aria-expanded="false" 
          aria-controls="panelsStayOpen-collapseTwo"
        >
          Species
        </button>
      </h2>
      <div 
        id="panelsStayOpen-collapseTwo" 
        className="accordion-collapse collapse" 
        aria-labelledby="panelsStayOpen-headingTwo"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {species.map((items, index) => (
            <FilterBTN 
              setPageNumber={setPageNumber}
              task={setSpecies}
              key={index} 
              name="species" 
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

export default Species
