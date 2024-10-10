import React from 'react';
import './homepage.css';


import HeroSection from './Homepage/HeroSection';
import FlashSalesSection from './Homepage/FlashSalesSection';

import CategoriesSection from './Homepage/CategoriesSection';
import ForYouSection from './Homepage/ForYouSection';




function Homepage() {
  return (
    <div bg="light" className='main '>
     
      <HeroSection/>
      <FlashSalesSection/>
      <CategoriesSection/>
      <ForYouSection/>
    </div>
  );
}

export default Homepage;