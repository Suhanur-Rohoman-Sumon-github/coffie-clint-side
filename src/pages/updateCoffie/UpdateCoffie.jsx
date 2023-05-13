import React from 'react';
import Navbar from '../shered/navbar/Navbar';
import Footer from '../shered/footer/Footer';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffie = () => {
    const data = useLoaderData()
    const {_id,chef,supplier,category,imgUrl} = data
    const handleUpdateproducts = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const category = form.category.value
        const imgUrl = form.imgUrl.value
        const updatedProducts = {
            email,
            chef,
            supplier,
            category,
            imgUrl
        }
        console.log
        fetch(`http://localhost:5000/updateCoffie/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedProducts)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

    }
    return (
        <div>
            <Navbar />
            <h1>update coffie : {supplier} </h1>
            <form onSubmit={handleUpdateproducts}>
                <div className="hero min-h-screen ">
                    <div className="bg-orange-200 w-full  ">
                        <div className="card-body mx-auto">
                            <div className='flex'>
                                <div className="form-control mr-2 md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="name" className="input input-bordered w-full " />
                                </div>
                                <div className="form-control mr-2 md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Chef</span>
                                    </label>
                                    <input type="text" name='chef' placeholder="Chef" className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className='flex'>
                                <div className="form-control mr-2 md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Supplier</span>
                                    </label>
                                    <input type="text" placeholder="supplier" name='supplier' className="input input-bordered w-full" />
                                </div>
                                <div className="form-control mr-2 md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Taste</span>
                                    </label>
                                    <input type="text" placeholder="Taste" name='taste' className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className='flex'>
                                <div className="form-control mr-2 md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input type="text" placeholder="category" name='category' className="input input-bordered w-full" />
                                </div>
                                <div className="form-control mr-2 md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <input type="text" placeholder="Details" name='Details' className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className="form-control mr-2 md:w-full">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="url" placeholder="imgUrl" name='imgUrl' className="input input-bordered w-full" />
                            </div>
                            <div className="">
                                <button className="btn btn-warning w-full mt-4">update</button>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
            <Footer />
        </div>
    );
};

export default UpdateCoffie;