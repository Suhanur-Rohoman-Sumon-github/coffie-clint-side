import React from 'react';
import Banner from '../banner/Banner';
import OurServises from '../ourservises/OurServises';
import Followus from '../followus/Followus';
import Footer from '../../shered/footer/Footer';
import Navbar from '../../shered/navbar/Navbar';
import OurCoffei from '../ourcoffie/OurCoffei';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <OurServises />
            <OurCoffei />
            <Followus />
            <Footer />
        </div>
    );
};

export default Home;