import React from 'react';
import bg from '../../../assets/images/more/3.png'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
                <div className=" ">
                    <div className="md:max-w-2xl md:ml-96 ">
                        <h1 className="mb-5 ml-20 text-white text-3xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5 ml-20 text-gray-300">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className="btn btn-warning ml-20 text-white">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;