import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: #ffffff;
  padding: 60px 0 30px;
  margin-top: 60px;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 50px;
`;

const FooterSection = styled(motion.div)`
  h3 {
    color: #333;
    font-size: 18px;
    margin-bottom: 20px;
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 40px;
      height: 2px;
      background: #82b440;
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  a {
    color: #666;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.2s;
    width: fit-content;
    
    &:hover {
      color: #82b440;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

const SocialIcon = styled(motion.a)`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  transition: all 0.3s;
  
  &:hover {
    background: #008ac5;
    color: white;
  }
`;

const Newsletter = styled.div`
  margin-top: 15px;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #82b440;
  }
`;

const SubscribeButton = styled(motion.button)`
  padding: 10px 20px;
  background: #008ac5;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    background: #0078ad;
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid #eee;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #666;
  font-size: 14px;
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 20px;
  
  a {
    color: #666;
    text-decoration: none;
    font-size: 14px;
    
    &:hover {
      color: #82b440;
    }
  }
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>About CouponGPT</h3>
            <FooterLinks>
              <Link to="/about">About Us</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/press">Press & Media</Link>
              <Link to="/contact">Contact Us</Link>
            </FooterLinks>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>For Shoppers</h3>
            <FooterLinks>
              <Link to="/how-it-works">How It Works</Link>
              <Link to="/rewards">Rewards Program</Link>
              <Link to="/cashback">Cashback Info</Link>
              <Link to="/faq">FAQ</Link>
            </FooterLinks>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>For Businesses</h3>
            <FooterLinks>
              <Link to="/advertise">Advertise with Us</Link>
              <Link to="/affiliate">Affiliate Program</Link>
              <Link to="/partners">Partner with Us</Link>
              <Link to="/merchant-support">Merchant Support</Link>
            </FooterLinks>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3>Connect With Us</h3>
            <SocialLinks>
              <SocialIcon 
                href="https://facebook.com" 
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-facebook-f"></i>
              </SocialIcon>
              <SocialIcon 
                href="https://twitter.com" 
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-twitter"></i>
              </SocialIcon>
              <SocialIcon 
                href="https://instagram.com" 
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-instagram"></i>
              </SocialIcon>
            </SocialLinks>
            
            <Newsletter>
              <h3>Newsletter</h3>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>
                Get the latest deals and discounts
              </p>
              <InputGroup>
                <Input type="email" placeholder="Enter your email" />
                <SubscribeButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </SubscribeButton>
              </InputGroup>
            </Newsletter>
          </FooterSection>
        </FooterGrid>

        <BottomBar>
          <Copyright>
            © {new Date().getFullYear()} CouponGPT. All rights reserved.
          </Copyright>
          <BottomLinks>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/sitemap">Sitemap</Link>
          </BottomLinks>
        </BottomBar>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 