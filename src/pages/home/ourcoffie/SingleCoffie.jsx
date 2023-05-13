import React from 'react';
import { Link } from 'react-router-dom';

const SingleCoffie = ({coffe,handleDelete}) => {

    const {_id,chef,supplier,category,imgUrl}=coffe
    
    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={imgUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <h2 className="card-title">{supplier}</h2>
                    <h2 className="card-title">{chef}</h2>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleDelete(_id)} className="btn btn-primary">delete</button>
                       <Link to={`/veiwcoffe/${_id}`}> <button className="btn btn-primary">veiwcoffe</button></Link>
                       <Link to={`/updateCoffie/${_id}`}> <button className="btn btn-primary">update coffe</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCoffie;