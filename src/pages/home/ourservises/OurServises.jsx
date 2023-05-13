import React, { useEffect, useState } from 'react';
import SingleServises from './SingleServises';

const OurServises = () => {
    const [servises,setSavises] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/servises')
        .then(res=>res.json())
        .then(data=>setSavises(data))
    },[])
    return (
        <div>
           <div>
            <h1>our servise</h1>
           </div>
           <div className='grid md:grid-cols-4'>
            {
               servises.map(servise=><SingleServises 
               key={servise._id}
               servise={servise}
               ></SingleServises>) 
            }
           </div>
        </div>
    );
};

export default OurServises;