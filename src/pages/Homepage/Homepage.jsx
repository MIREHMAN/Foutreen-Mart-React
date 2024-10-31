import React from 'react';
import './Homepage.css';
import HeroSection from '../Homepage/HeroSection';
import FlashSalesSection from '../Homepage/FlashSalesSection';
import CategoriesSection from '../Homepage/CategoriesSection';
import ForYouSection from '../Homepage/ForYouSection';
import PromotionalSection from './PromotionalSection';
import CustomCarousel from '../../components/CustomCarousel';



function Homepage() {
  return (
    <div bg="light" className='main '>
     
      <HeroSection/>
      <PromotionalSection/>
      <FlashSalesSection/>
      
      <CategoriesSection/>
      <ForYouSection/>
    </div>
  );
}

export default Homepage;