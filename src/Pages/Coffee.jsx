import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Card from '../components/Card';

const Coffee = () => {
    const coffessData=useLoaderData();
    console.log(coffessData);
    const [coffee, setCoffee]=useState(coffessData);

    const handleSort=(type)=>{
        if(type==='popularity')
        {
            //console.log('popularity');
            const sorted=[...coffee].sort((a,b)=>b.popularity-a.popularity);
            setCoffee(sorted);

        }
        else if(type==='rating')
        {
           //console.log('rating'); 
              const sorted=[...coffee].sort((a,b)=>b.rating-a.rating);
                setCoffee(sorted);
        }
    }
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between mb-10'>
            <div>
                <h1 className='text-3xl'>Sort Coffee's by Popularity & Rating</h1>
            </div>
            <div>
                <button onClick={()=>{
                    handleSort('popularity')
                }} className='btn mr-4 bg-amber-400'>Sort By Popularity</button>
                <button onClick={()=>{
                    handleSort('rating')
                }} className='btn bg-amber-400'>Sort By Rating</button>

            </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                coffee.map(coffee=>(
                    <Card coffees={coffee} key={coffee.id}></Card>
                ))
            }
        </div>
        </div>
    );
};

export default Coffee;