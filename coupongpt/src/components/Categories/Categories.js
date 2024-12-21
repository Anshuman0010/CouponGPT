import React, { useState } from 'react';
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
  margin-bottom: 30px;
  
  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: #008ac5;
    margin-top: 8px;
  }
`;

const Content = styled.div`
  display: flex;
  gap: 20px;
`;

const Sidebar = styled.div`
  width: 240px;
  flex-shrink: 0;
  background: white;
  border-radius: 8px;
  overflow: hidden;
`;

const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 16px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.active ? '#eeeeee' : '#ffffff'};
  border-left: 4px solid ${props => props.active ? '#008ac5' : 'transparent'};

  &:hover {
    background: #f8f9fa;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

const CategoryIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => props.active ? '#e3f2f7' : '#eeeeee'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.active ? '#008ac5' : '#666'};
`;

const CategoryName = styled.span`
  font-size: 16px;
  color: #333;
`;

const OffersSection = styled.div`
  flex: 1;
`;

const OffersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ShowMore = styled.a`
  color: #3f51b5;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
`;

const OfferCard = styled(motion.div)`
  background: white;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  height: 200px;
`;

const OfferHeader = styled.div`
  padding: 10px 12px;
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
`;

const OfferTag = styled.div`
  background: #f8f9fa;
  color: #666;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.2px;
`;

const StoreLogo = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  object-fit: contain;
`;

const OfferContent = styled.div`
  padding: 12px;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const OfferTitle = styled.h3`
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
  line-height: 1.4;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 60px;

  &:hover {
    color: #008ac5;
    cursor: pointer;
  }
`;

const SeeAllLink = styled.a`
  color: #008ac5;
  text-decoration: none;
  font-size: 13px;
  display: flex;
  align-items: center;
  margin-top: 8px;
  
  &:hover {
    text-decoration: underline;
  }

  &:after {
    content: '>';
    margin-left: 4px;
    font-size: 11px;
  }
`;

const CashbackTag = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 15px;
  
  img {
    width: 20px;
    height: 20px;
  }
  
  span {
    color: #28a745;
    font-size: 14px;
    font-weight: 500;
  }
`;

const ViewButton = styled(motion.button)`
  width: 100%;
  padding: 12px;
  background: #e41e31;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: #d01829;
  }
`;

const categories = [
  { id: 'most-used', name: 'Most Used', icon: '🌟' },
  { id: 'travel', name: 'Travel', icon: '✈️' },
  { id: 'recharge', name: 'Recharge', icon: '⚡' },
  { id: 'fashion', name: 'Fashion', icon: '👕' },
  { id: 'food', name: 'Food', icon: '🍽️' },
  { id: 'electronics', name: 'Electronics', icon: '📱' }
];

const offers = {
  'most-used': [
    {
      id: 1,
      tag: 'CHRISTMAS SPECIAL',
      store: { name: 'Myntra', logo: 'https://cdn.grabon.in/gograbon/images/merchant/1620803855189/myntra-logo.jpg' },
      title: 'Myntra Magical Christmas Sale: Get 50%-90% OFF + Extra Rs 300 OFF | Live Now..!',
      cashback: 'Upto 6.3% Cashback',
      special: true
    },
    {
      id: 2,
      tag: 'GRABON EXCLUSIVE',
      store: { name: 'Times Prime', logo: 'https://cdn.grabon.in/gograbon/images/merchant/1707117225636/times-prime-logo.jpg' },
      title: 'Exclusive Offer - Flat Rs.700 OFF On Times Prime Power Pack',
      cashback: 'Upto 7% Rewards'
    },
    {
      id: 3,
      tag: 'SPECIAL DEAL',
      store: { name: 'Amazon', logo: 'https://cdn.grabon.in/gograbon/images/merchant/1620649286172/mamaearth-logo.jpg' },
      title: 'Amazon Great Indian Festival: Up to 80% OFF on Electronics, Fashion & More',
      cashback: 'Up to 12% Cashback',
      special: true
    }
  ],
  'travel': [
    {
      id: 1,
      tag: 'FLAT 25% OFF',
      store: { name: 'Uber', logo: 'https://via.placeholder.com/40' },
      title: 'Uber Offer: Flat 25% OFF up to ₹100 on First 5 Rides | New Users',
      cashback: '₹100 Cashback',
      special: true
    },
    {
      id: 2,
      tag: 'SPECIAL OFFER',
      store: { name: 'MakeMyTrip', logo: 'https://via.placeholder.com/40' },
      title: 'MakeMyTrip Flight Offers: Up to ₹5000 OFF on Domestic Flights',
      cashback: 'Up to 4.2% Rewards',
      special: false
    },
    {
      id: 3,
      tag: 'NEW YEAR DEAL',
      store: { name: 'OYO', logo: 'https://via.placeholder.com/40' },
      title: 'OYO New Year Sale: Flat 40% OFF on Hotel Bookings Across India',
      cashback: '5% Extra Cashback',
      special: true
    }
  ],
  'recharge': [
    {
      id: 1,
      tag: 'EXCLUSIVE',
      store: { name: 'Paytm', logo: 'https://via.placeholder.com/40' },
      title: 'Paytm Mobile Recharge: Get Up to ₹500 Cashback on First Recharge',
      cashback: '100% Cashback',
      special: true
    },
    {
      id: 2,
      tag: 'LIMITED TIME',
      store: { name: 'PhonePe', logo: 'https://via.placeholder.com/40' },
      title: 'PhonePe DTH Recharge: Flat ₹50 OFF on DTH Recharge of ₹500',
      cashback: '₹50 Instant Discount',
      special: false
    },
    {
      id: 3,
      tag: 'SPECIAL OFFER',
      store: { name: 'MobiKwik', logo: 'https://via.placeholder.com/40' },
      title: 'MobiKwik Bill Payments: Get 2% SuperCash on All Bill Payments',
      cashback: '2% SuperCash',
      special: true
    }
  ],
  'fashion': [
    {
      id: 1,
      tag: 'END OF SEASON',
      store: { name: 'AJIO', logo: 'https://via.placeholder.com/40' },
      title: 'AJIO End Of Season Sale: 50-90% OFF + Extra 30% OFF on 30k+ Styles',
      cashback: 'Up to 8% Rewards',
      special: true
    },
    {
      id: 2,
      tag: 'CLEARANCE SALE',
      store: { name: 'H&M', logo: 'https://via.placeholder.com/40' },
      title: 'H&M Clearance Sale: Get Minimum 50% OFF on Fashion & Accessories',
      cashback: '3% Extra Cashback',
      special: false
    },
    {
      id: 3,
      tag: 'FESTIVE OFFER',
      store: { name: 'Zara', logo: 'https://via.placeholder.com/40' },
      title: 'Zara Winter Collection: Up to 60% OFF on Selected Items',
      cashback: '4.5% Cashback',
      special: true
    }
  ],
  'food': [
    {
      id: 1,
      tag: 'FIRST ORDER',
      store: { name: 'Swiggy', logo: 'https://via.placeholder.com/40' },
      title: 'Swiggy First Order: Flat 50% OFF up to ₹150 + Free Delivery',
      cashback: '₹150 OFF',
      special: true
    },
    {
      id: 2,
      tag: 'WEEKEND SPECIAL',
      store: { name: 'Zomato', logo: 'https://via.placeholder.com/40' },
      title: 'Zomato Weekend Offer: 60% OFF up to ₹120 + Free Delivery',
      cashback: 'Up to ₹120 OFF',
      special: true
    },
    {
      id: 3,
      tag: 'PREMIUM OFFER',
      store: { name: 'EatSure', logo: 'https://via.placeholder.com/40' },
      title: 'EatSure New User Offer: Flat 40% OFF on First 3 Orders',
      cashback: '40% Instant Savings',
      special: false
    }
  ],
  'electronics': [
    {
      id: 1,
      tag: 'BANK OFFER',
      store: { name: 'Flipkart', logo: 'https://via.placeholder.com/40' },
      title: 'Flipkart Electronics Sale: Up to 80% OFF + 10% Bank Discount',
      cashback: '10% Bank Offer',
      special: true
    },
    {
      id: 2,
      tag: 'CLEARANCE',
      store: { name: 'Croma', logo: 'https://via.placeholder.com/40' },
      title: 'Croma Gadget Sale: Up to 50% OFF on Electronics & Accessories',
      cashback: '5% Instant Discount',
      special: false
    },
    {
      id: 3,
      tag: 'NEW LAUNCH',
      store: { name: 'Reliance Digital', logo: 'https://via.placeholder.com/40' },
      title: 'Reliance Digital Sale: Up to 40% OFF on Latest Smartphones',
      cashback: 'Extra 5% Cashback',
      special: true
    }
  ]
};

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('most-used');

  return (
    <Container>
      <Title>Today's Top Coupons & Offers</Title>
      <Content>
        <Sidebar>
          {categories.map(category => (
            <CategoryItem
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              <CategoryIcon active={activeCategory === category.id}>
                {category.icon}
              </CategoryIcon>
              <CategoryName>{category.name}</CategoryName>
            </CategoryItem>
          ))}
        </Sidebar>

        <OffersSection>
          <OffersGrid>
            {offers[activeCategory]?.map(offer => (
              <OfferCard
                key={offer.id}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <OfferHeader>
                  <OfferTag special={offer.special}>{offer.tag}</OfferTag>
                  <StoreLogo src={offer.store.logo} alt={offer.store.name} />
                </OfferHeader>
                
                <OfferContent>
                  <OfferTitle>{offer.title}</OfferTitle>
                  <SeeAllLink href="#">
                    See All {offer.store.name} Offers
                  </SeeAllLink>
                </OfferContent>
              </OfferCard>
            ))}
          </OffersGrid>
        </OffersSection>
      </Content>
    </Container>
  );
};

export default Categories; 