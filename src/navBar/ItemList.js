import React from 'react';
import './ItemList.css';


function ItemList({ image,title, description, buttonText }) {
  return (
    <>
    
    <div className="card-container">
       <img src={image} alt={title} className="card-image" />
      <h2 className="list-item">{title}</h2>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
    
 
    </>
  

    
  )
}

export default ItemList;