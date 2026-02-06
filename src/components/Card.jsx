import React from 'react';
import Coffee from '../Pages/Coffee';
import { Link } from 'react-router';

const Card = ({coffees}) => {
    const {name,image,category,origin,type,id,rating,popularity}=coffees || {};
    return (
     <Link to={`/coffeeDetails/${id}`}>
           <div>
            
            <div className="card bg-base-100 w-full shadow-sm">
  <figure>
    <img className='cover h-52 w-full'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     <span className=''>Name:</span> {name}
    </h2>
    <p>Category:{category}</p>
    <p>Type:{type}</p>
    <p>Origin:{origin}</p>
    <p>Rating:{rating}/5</p>
    <p>Popularity:{popularity/100}</p>



  </div>
</div>
        </div>
     </Link>
    );
};

export default Card;