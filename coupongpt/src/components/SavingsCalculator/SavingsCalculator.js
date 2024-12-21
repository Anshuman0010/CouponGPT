import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  font-size: 28px;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
  
  span {
    color: #008ac5;
  }
`;

const CalculatorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  align-items: center;
`;

const InputSection = styled.div`
  padding: 20px;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #666;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #eeeeee;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: #008ac5;
  }
`;

const ResultSection = styled(motion.div)`
  background: #f8f9fa;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
`;

const SavingsAmount = styled(motion.div)`
  font-size: 36px;
  color: #008ac5;
  font-weight: bold;
  margin: 20px 0;
`;

const SavingsText = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.6;
`;

const CalculateButton = styled(motion.button)`
  background: #008ac5;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
`;

const SavingsCalculator = () => {
  const [amount, setAmount] = useState('');
  const [savings, setSavings] = useState(null);

  const calculateSavings = () => {
    const baseAmount = parseFloat(amount) || 0;
    const calculatedSavings = baseAmount * 0.15; // 15% average savings
    setSavings(calculatedSavings);
  };

  return (
    <Container>
      <Title>Calculate Your <span>Savings</span></Title>
      <CalculatorGrid>
        <InputSection>
          <InputGroup>
            <Label>Enter your estimated shopping amount (₹)</Label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g., 10000"
            />
          </InputGroup>
          <CalculateButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={calculateSavings}
          >
            Calculate Savings
          </CalculateButton>
        </InputSection>
        
        <AnimatePresence>
          {savings !== null && (
            <ResultSection
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <SavingsText>You could save up to</SavingsText>
              <SavingsAmount
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                ₹{savings.toFixed(2)}
              </SavingsAmount>
              <SavingsText>
                using our coupons and cashback offers!
              </SavingsText>
            </ResultSection>
          )}
        </AnimatePresence>
      </CalculatorGrid>
    </Container>
  );
};

export default SavingsCalculator; 