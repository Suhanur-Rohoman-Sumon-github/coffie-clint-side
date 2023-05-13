import React from 'react';


const SingleServises = ({servise}) => {
    const {title,text,img} =servise
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={img} className='w-20 h-20'  alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {title}
                    </h2>
                    <p>{text}</p>
                  
                </div>
            </div>
        </div>
    );
};

export default SingleServises;