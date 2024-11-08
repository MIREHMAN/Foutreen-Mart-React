import React from 'react';
import './Homepage.css';
import HeroSection from '../Homepage/HeroSection';
import FlashSalesSection from '../Homepage/FlashSalesSection';
import CategoriesSection from '../Homepage/CategoriesSection';
import ForYouSection from '../Homepage/ForYouSection';
import PromotionalSection from './PromotionalSection';
import PromotionalSection2 from './PromotionalSection2';




function Homepage() {
  return (
    <div bg="light" className='main '>
     
      <HeroSection/>
      <PromotionalSection/>
      <FlashSalesSection/>
      <CategoriesSection/>
      <PromotionalSection2/>
      <ForYouSection/>
    </div>
  );
}

export default Homepage;