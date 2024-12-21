import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
  
  span {
    color: #008ac5;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #008ac5;
    }
  }
`;

const DealsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;

const DealCard = styled(motion.div)`
  position: relative;
  height: 200px;
  perspective: 1000px;
  cursor: pointer;
`;

const CardInner = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const CardFront = styled(CardSide)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  
  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin-bottom: 15px;
  }
`;

const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DealTitle = styled.h3`
  font-size: 16px;
  color: #333;
  margin: 10px 0;
`;

const Discount = styled.div`
  font-size: 24px;
  color: #008ac5;
  font-weight: bold;
  margin: 5px 0;
`;

const ValidityTag = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #eeeeee;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #666;
`;

const CopyButton = styled(motion.button)`
  background: #008ac5;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
  margin-top: auto;
`;

const trendingDeals = [
  {
    id: 1,
    store: {
      name: 'Amazon',
      logo: 'https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/e3f0cb0aec65ed22f674fd634650db38/amazon-logo-large.jpg?41978'
    },
    title: 'Special Electronics Sale',
    discount: 'Up to 75% OFF',
    code: 'TECH75',
    validity: '2 days left'
  },
  {
    id: 2,
    store: {
      name: 'Flipkart',
      logo: 'https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/4022b70285e468ff98d01073c52038b8/flipkart-logo-large.jpg?126153'
    },
    title: 'Fashion & Lifestyle Sale',
    discount: '50-80% OFF',
    code: 'STYLE80',
    validity: '3 days left'
  },
  {
    id: 3,
    store: {
      name: 'Myntra',
      logo: 'https://cdn.grabon.in/gograbon/images/merchant/1620803855189/myntra-logo.jpg'
    },
    title: 'End of Season Sale',
    discount: 'Min 60% OFF',
    code: 'EOSS60',
    validity: '5 days left'
  },
];

const TrendingDeals = () => {
  return (
    <Container>
      <Title>Trending <span>Deals</span></Title>
      <DealsGrid>
        {trendingDeals.map((deal) => (
          <DealCard key={deal.id}>
            <CardInner
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
            >
              <CardFront>
                <img src={deal.store.logo} alt={deal.store.name} />
                <DealTitle>{deal.store.name}</DealTitle>
                <Discount>{deal.discount}</Discount>
              </CardFront>
              <CardBack>
                <ValidityTag>{deal.validity}</ValidityTag>
                <DealTitle>{deal.title}</DealTitle>
                <CopyButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Copy Code: {deal.code}
                </CopyButton>
              </CardBack>
            </CardInner>
          </DealCard>
        ))}
      </DealsGrid>
    </Container>
  );
};

export default TrendingDeals; 