import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import Card from './Card';

const CoffeeCards = () => {
    const navigate=useNavigate();
   const CoffeesData=useLoaderData();
   //console.log(Coffees);
    const obj=useParams();
    //console.log(obj.category);

    const [coffees,setCoffees]=useState([]);

    useEffect(()=>{
        if(obj.category){
            const filteredCoffees=CoffeesData.filter(coffee=>coffee.category===obj.category);
            setCoffees(filteredCoffees);
        }
        else{
            setCoffees(CoffeesData.slice(0,6));
        }

    },[obj.category, CoffeesData])

    console.log(coffees);
    return (
        <>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
            coffees.map(coffees => <Card key={coffees.id} coffees={coffees}></Card>)
           }
        </div>
        <button onClick={()=>{
            setCoffees(CoffeesData);
        }} className='btn btn-warning'>View More</button>
        </>
    );
};

export default CoffeeCards;