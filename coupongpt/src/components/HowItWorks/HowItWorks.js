import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Container = styled.div`
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 28px;
  color: #333;
  text-align: center;
  margin-bottom: 50px;
  
  span {
    color: #008ac5;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 100px;
    left: 50px;
    right: 50px;
    height: 2px;
    background: #e0e0e0;
    z-index: 0;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const Step = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 1;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
`;

const StepNumber = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #008ac5;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const StepTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin: 15px 0;
`;

const StepDescription = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  max-width: 250px;
`;

const steps = [
  {
    number: 1,
    title: 'Browse Deals',
    description: 'Explore thousands of deals and coupons from your favorite brands'
  },
  {
    number: 2,
    title: 'Copy Code',
    description: 'Select your deal and copy the coupon code with one click'
  },
  {
    number: 3,
    title: 'Shop & Save',
    description: 'Use the code at checkout and enjoy instant savings'
  },
  {
    number: 4,
    title: 'Earn Cashback',
    description: 'Get additional cashback on your purchases automatically'
  }
];

const HowItWorks = () => {
  return (
    <Container>
      <Title>How <span>CouponGPT</span> Works</Title>
      <StepsContainer>
        {steps.map((step, index) => (
          <Step
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <StepNumber
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {step.number}
            </StepNumber>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Step>
        ))}
      </StepsContainer>
    </Container>
  );
};

export default HowItWorks; 