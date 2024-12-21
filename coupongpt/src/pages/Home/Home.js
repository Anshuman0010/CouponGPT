import React from 'react';
import styled from '@emotion/styled';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import PopularOffers from '../../components/PopularOffers';
import Categories from '../../components/Categories';
import FeaturedBrands from '../../components/FeaturedBrands';
import HowItWorks from '../../components/HowItWorks';
import About from '../../components/About';
import Footer from '../../components/Footer';
import TrendingDeals from '../../components/TrendingDeals';
import SavingsCalculator from '../../components/SavingsCalculator';

const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  padding-top: 20px;
  flex: 1;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <MainContent>
        <Banner />
        <HowItWorks />
        <TrendingDeals />
        <PopularOffers />
        <SavingsCalculator />
        <FeaturedBrands />
        <Categories />
        <About />
      </MainContent>
      <Footer />
    </HomeContainer>
  );
};

export default Home; 