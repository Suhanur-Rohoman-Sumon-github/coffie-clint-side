import React, { useEffect, useState } from 'react';
import SingleCoffie from './SingleCoffie';

const OurCoffei = () => {
    const [coffes, setCoffies] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/coffie')
            .then(res => res.json())
            .then(data => setCoffies(data))
    }, [])
    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/coffie/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount>0){
                    const remaing = coffes.filter(coffe=>coffe._id !==id)
                    setCoffies(remaing)
                }
            })
    }
    return (
        <div>
            <h1>this is our coffie</h1>
            <div className='grid md:grid-cols-3'>
                {
                    coffes.map(coffe => <SingleCoffie
                        key={coffe._id}
                        coffe={coffe}
                        handleDelete={handleDelete}
                    ></SingleCoffie>)
                }
            </div>
        </div>
    );
};

export default OurCoffei;