import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Container = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 60%;
    height: 3px;
    background: #82b440;
  }
`;

const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const OfferCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const OfferImage = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StoreLogo = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: white;
  border-radius: 8px;
  padding: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
`;

const ExclusiveTag = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #82b440;
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
`;

const OfferContent = styled.div`
  padding: 15px;
`;

const OfferTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
`;

const OfferDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.4;
`;

const popularOffers = [
  {
    id: 1,
    title: "FLAT 50% OFF",
    description: "Exclusive Offer: Flat 50% OFF On Your Orders",
    image: "https://cdn.grabon.in/gograbon/images/banners/banner-1733549389947.jpg",
    storeLogo: "https://cdn.grabon.in/gograbon/images/merchant/1692205736346.jpg",
    isExclusive: true
  },
  {
    id: 2,
    title: "Up To 97% OFF",
    description: "Udemy Coupon : Save Up to 97% on Top Online Courses!",
    image: "https://cdn.grabon.in/gograbon/images/banners/banner-1726046786221.jpg",
    storeLogo: "https://cdn.grabon.in/gograbon/images/merchant/1628507087552.jpg",
    isExclusive: false
  },
  {
    id: 3,
    title: "END OF REASON SALE",
    description: "Myntra End Of Reason Sale: Get 50%-90% OFF + Extra Rs 500 OFF | Live Now..!",
    image: "https://cdn.grabon.in/gograbon/images/banners/banner-1722241917328.jpg",
    storeLogo: "https://cdn.grabon.in/gograbon/images/merchant/1624621445376.jpg",
    isExclusive: false
  }
];

const PopularOffers = () => {
  return (
    <Container>
      <Title>Popular Offers of the Day</Title>
      <OffersGrid>
        {popularOffers.map((offer) => (
          <OfferCard
            key={offer.id}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <OfferImage>
              <img src={offer.image} alt={offer.title} />
              <StoreLogo>
                <img src={offer.storeLogo} alt="Store Logo" />
              </StoreLogo>
              {offer.isExclusive && <ExclusiveTag>EXCLUSIVE</ExclusiveTag>}
            </OfferImage>
            <OfferContent>
              <OfferTitle>{offer.title}</OfferTitle>
              <OfferDescription>{offer.description}</OfferDescription>
            </OfferContent>
          </OfferCard>
        ))}
      </OffersGrid>
    </Container>
  );
};

export default PopularOffers; 