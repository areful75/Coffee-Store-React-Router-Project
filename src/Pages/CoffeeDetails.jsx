import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import img from '../assets/nutrition.png';
const CoffeeDetails = () => {
    const obj = useParams();
    console.log(obj.id);
    const data = useLoaderData();
    console.log(data);

    const intId = parseInt(obj.id);
    const singleCoffee = data.find(coffee => coffee.id === intId);
    const { name, image,ingredients,nutrition_info, description,making_process, category, origin, type, id, rating, popularity } = singleCoffee || {};

    return (

        <div>
            <h1 className='text-4xl font-thin mb-5'>{description}</h1>

            <div style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                //backgroundPosition: 'cover',
                backgroundRepeat: 'no-repeat',
            }} className=" rounded-2xl hero bg-base-200  h-[600px]">

            </div>
            <div className='flex justify-between mt-5'>
                <div>
                    <h1>{name}</h1>
                    <p>Popularity:{popularity}</p>
                    <p>Rating:{rating}</p>
                </div>
                <button  className='btn bg-amber-400'>Add Favorite</button>
            </div>

            <div className='mt-5'>
                <h1 className='text-3xl font-thin'>Making Process:</h1>
                <p>{making_process}</p>
            </div>

            <div className='flex  items-center justify-between'>
                
                <div>
                <div>
                    <h1 className='text-3xl font-thin'>Ingredients:</h1>
                    
                    <ol className='list-disc mt-5'>
                    
                    {
                        ingredients.map((ingredient, index) => (
                            <li key={index} className='ml-5 text-xl'>{ingredient}</li>
                        ))
                    }
                    </ol>
                    


                </div>
                <div className='mt-5'>
                    <h1 className='text-3xl font-thin'>Nutrition:</h1>
                    <ol className='list-disc mt-5'>
                    
                    {/* {
                        nutrition_info.map((info, index) => (
                            <li key={index} className='ml-5 text-xl'>{calories}</li>
                        ))

                    } */}
                    <li className='ml-5 text-xl'>coffee</li>
                    <li className='ml-5 text-xl'>coffee</li>


                    </ol>


                </div>
                </div>

                <img className='h-[400px]' src={img} alt="" />
               

            </div>
        </div>
    );
};

export default CoffeeDetails;