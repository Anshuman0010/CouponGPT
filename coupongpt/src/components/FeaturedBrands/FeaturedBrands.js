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
  }
`;

const BrandsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const BrandCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const BrandLogo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

const BrandName = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 0;
`;

const OfferCount = styled.span`
  color: #666;
  font-size: 14px;
`;

const CashbackTag = styled.div`
  background: #eeeeee;
  color: #008ac5;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
`;

const brands = [
  {
    id: 1,
    name: 'Amazon',
    logo: 'https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/e3f0cb0aec65ed22f674fd634650db38/amazon-logo-large.jpg?41978',
    offers: 50,
    cashback: 'Up to 12% Cashback'
  },
  {
    id: 2,
    name: 'Flipkart',
    logo: 'https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/4022b70285e468ff98d01073c52038b8/flipkart-logo-large.jpg?126153',
    offers: 45,
    cashback: 'Up to 8% Rewards'
  },
  {
    id: 3,
    name: 'Myntra',
    logo: 'https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/4763d1d29415df742a808c52e765a098/myntra-logo-large.jpg?506948',
    offers: 30,
    cashback: '7% Cashback'
  },
  {
    id: 4,
    name: 'Ajio',
    logo: 'https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/9ffe4a7a7970e2d853ea7f9dbce75627/ajio-logo-large.jpg?294922',
    offers: 25,
    cashback: 'Up to 6% Cashback'
  },
  {
    id: 5,
    name: 'Nykaa',
    logo: 'https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/23998f55b9f1afd8abb9ae29e2a111e7/nykaa-logo-large.jpg?723189',
    offers: 20,
    cashback: '5% Cashback'
  }
];

const FeaturedBrands = () => {
  return (
    <Container>
      <Title>Featured <span>Brands</span></Title>
      <BrandsGrid>
        {brands.map((brand, index) => (
          <BrandCard
            key={brand.id}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <BrandLogo src={brand.logo} alt={brand.name} />
            <BrandName>{brand.name}</BrandName>
            <OfferCount>{brand.offers} Active Offers</OfferCount>
            <CashbackTag>{brand.cashback}</CashbackTag>
          </BrandCard>
        ))}
      </BrandsGrid>
    </Container>
  );
};

export default FeaturedBrands; 