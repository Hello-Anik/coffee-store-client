import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees ]= useState(initialCoffees);
    return (
        <div className='mt-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {coffees.map(coffee => <CoffeeCard 
              key={coffee._id} 
              coffee = {coffee}
              coffees={coffees}
              setCoffees =  {setCoffees}
              ></CoffeeCard>)}
               
            </div>
        </div>
    );
};

export default Home;