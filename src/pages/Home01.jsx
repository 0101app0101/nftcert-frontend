import React from 'react';
import Header from '../components/header/Header';
import Slider01 from '../components/slider/Slider01';
import dataSlider from '../assets/fake-data/dataSlider';
import LatestCollections from '../components/layouts/home/LatestCollections';
import dataCollections from '../assets/fake-data/dataCollections'
import TrendingCollections from '../components/layouts/home/TrendingCollections';
import dataTrendingCollections from '../assets/fake-data/dataTrendingCollections'
import Footer from '../components/footer/Footer';
import Create from '../components/layouts/home02/Create';
import dataCreate from '../assets/fake-data/dataCreate'
import Service from '../components/layouts/home/Service';

const Home01 = () => {
  return <div className='home-1'>
    <Header />
    <Slider01 data={dataSlider} />
    <Create data={dataCreate} />
    <TrendingCollections data={dataTrendingCollections} />
    <LatestCollections data={dataCollections} />
    <Service />
    <Footer />
  </div>;
};

export default Home01;
