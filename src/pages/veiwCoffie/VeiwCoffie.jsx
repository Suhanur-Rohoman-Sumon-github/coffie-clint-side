import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../shered/navbar/Navbar';
import Footer from '../shered/footer/Footer';

const VeiwCoffie = () => {
    const coffie = useLoaderData()
    const { chef, supplier, category, imgUrl } = coffie
    return ( 
        <>
        <Navbar />
           <div className='mx-auto w-4/12'>
           <div className="card w-96 bg-base-100  jus shadow-xl">
                <figure><img src={imgUrl } alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chef}</h2>
                    <h2 className="card-title">{supplier}</h2>
                    <h2 className="card-title">{category}</h2>
                </div>
            </div>
           </div>
            <Footer />
        </>
    );
};

export default VeiwCoffie;