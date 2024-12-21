import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavContainer = styled.nav`
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const TopBar = styled.div`
  background: #f8f8f8;
  padding: 8px 0;
  text-align: center;
  border-bottom: 1px solid #eee;
`;

const MainNav = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 8px 0;

  img {
    height: 40px;
    width: auto;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const SearchBar = styled.div`
  flex: 1;
  max-width: 600px;
  margin: 0 20px;
  position: relative;
  
  input {
    width: 100%;
    padding: 12px 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #f5f5f5;
    font-size: 14px;
    
    &:focus {
      outline: none;
      border-color: #008ac5;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const CountrySelect = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const LoginButton = styled(Link)`
  background: #008ac5;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    background: #0078ad;
  }
`;

const SubNav = styled.div`
  border-top: 1px solid #eee;
  background: white;
`;

const SubNavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 25px;
  
  a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
    
    &:hover {
      color: #82b440;
    }
  }
`;

const SpecialOffers = styled.div`
  display: flex;
  gap: 15px;
  
  a {
    text-decoration: none;
    color: #fff;
    background: #3f51b5;
    padding: 8px 15px;
    border-radius: 4px;
    font-size: 14px;
    
    &:hover {
      background: #303f9f;
    }
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <TopBar>
        Join Our Telegram Channel For Exclusive Deals and Coupons! 
        <button style={{ marginLeft: '10px', background: '#3f51b5', color: 'white', border: 'none', padding: '5px 15px', borderRadius: '4px' }}>
          JOIN NOW
        </button>
      </TopBar>
      
      <MainNav>
        <Logo to="/">
          <motion.img
            src="https://res.cloudinary.com/dqt4zammn/image/upload/v1734755930/wmremove-transformed_bgrky9.jpg"
            alt="CouponGPT Logo"
            style={{ height: '50px', width: 'auto' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
            }}
            transition={{ 
              duration: 0.5,
              type: "spring",
              stiffness: 100 
            }}
            whileHover={{ 
              scale: 1.05,
              rotate: [0, -2, 2, -2, 0],
              transition: {
                duration: 0.4,
                rotate: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 0.5
                }
              }
            }}
          />
        </Logo>
        
        <SearchBar>
          <input type="text" placeholder="Search for brands, categories" />
        </SearchBar>
        
        <RightSection>
          
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', top: -8, right: -8, background: '#e41e31', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '12px' }}>
              0
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22"> <path fill="#383D4E" stroke="#373C51" stroke-width=".3" d="M15.199 14.697c-.212-.13-.277-.408-.146-.62.13-.21.408-.276.619-.145.077.047.141.076.19.089.986.253 1.688 1.146 1.688 2.179 0 1.243-1.007 2.25-2.25 2.25H2.7c-1.243 0-2.25-1.007-2.25-2.25 0-1.035.704-1.928 1.693-2.18.047-.012.112-.041.19-.09.212-.13.489-.063.619.15.13.211.063.488-.149.618-.15.092-.295.157-.438.194-.592.15-1.015.687-1.015 1.308 0 .746.604 1.35 1.35 1.35h12.6c.746 0 1.35-.604 1.35-1.35 0-.62-.421-1.156-1.013-1.308-.143-.037-.289-.102-.438-.195zm.682-.387c0 .248-.201.45-.45.45-.248 0-.45-.202-.45-.45V8.642c0-2.698-2.004-5.018-4.759-5.564-.244-.049-.402-.285-.354-.53.049-.243.286-.401.53-.353 3.167.628 5.483 3.31 5.483 6.447v5.668zM7.586 2.2c.243-.05.48.107.53.35.05.244-.107.482-.35.531l-.082.017c-2.711.579-4.665 2.876-4.665 5.544v5.668c0 .248-.202.45-.45.45-.249 0-.45-.202-.45-.45V8.642c0-3.102 2.26-5.759 5.377-6.424l.09-.018zM5.85 18c0-.249.201-.45.45-.45s.45.201.45.45c0 1.243 1.007 2.25 2.25 2.25s2.25-1.007 2.25-2.25c0-.249.201-.45.45-.45s.45.201.45.45c0 1.74-1.41 3.15-3.15 3.15S5.85 19.74 5.85 18zM8.128 2.636c0 .249-.202.45-.45.45-.249 0-.45-.201-.45-.45v-.35c0-1.01.782-1.836 1.766-1.836.98 0 1.767.829 1.767 1.836v.35c0 .249-.202.45-.45.45-.249 0-.45-.201-.45-.45v-.35c0-.52-.395-.936-.867-.936-.476 0-.866.412-.866.936v.35z"></path> </svg>
          </div>
          
          <LoginButton to="/login">Log In / Sign Up</LoginButton>
        </RightSection>
      </MainNav>
      
      <SubNav>
        <SubNavContent>
          <NavLinks>
            <Link to="/stores">Stores</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/indulge">Indulge</Link>
            <Link to="/submit-coupon">Submit Coupon</Link>
            <Link to="/deals">Deals Of The Day</Link>
          </NavLinks>
          
          <SpecialOffers>
            <Link to="/christmas-offers">Christmas Offers</Link>
          </SpecialOffers>
        </SubNavContent>
      </SubNav>
    </NavContainer>
  );
};

export default Navbar; 