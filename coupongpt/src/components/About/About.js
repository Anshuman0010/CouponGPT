import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Container = styled.div`
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 60px;
  text-align: center;
  position: relative;
  
  span {
    color: #008ac5;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: #008ac5;
  }
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
`;

const HighlightCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const IconContainer = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: #f8f9fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  
  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
`;

const HighlightTitle = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
`;

const HighlightText = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
`;

const TestimonialsSection = styled.div`
  margin-top: 80px;
`;

const TestimonialsHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  
  h3 {
    font-size: 28px;
    color: #333;
    margin-bottom: 15px;
  }
  
  p {
    color: #666;
    font-size: 16px;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const TestimonialCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '"';
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 60px;
    color: #008ac5;
    opacity: 0.1;
    font-family: Georgia, serif;
  }
`;

const Stars = styled.div`
  color: #008ac5;
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  gap: 5px;
`;

const TestimonialText = styled.p`
  font-size: 15px;
  color: #555;
  line-height: 1.8;
  margin-bottom: 20px;
  font-style: italic;
`;

const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const CustomerAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #008ac5;
`;

const CustomerDetails = styled.div`
  h4 {
    font-size: 16px;
    color: #333;
    margin-bottom: 4px;
  }
  
  p {
    font-size: 14px;
    color: #666;
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const highlights = [
  {
    icon: 'https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Group_1484.png',
    title: 'A Times Group Company',
    description: 'Backed by one of India\'s largest media conglomerates'
  },
  {
    icon: 'https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/stores-icon.png',
    title: '3000+ Online Brands',
    description: 'Partnered with leading brands across categories'
  },
  {
    icon: 'https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Group_1543.png',
    title: 'Trusted By 100 Cr+ Shoppers',
    description: 'Helping millions save on their online shopping'
  }
];

const testimonials = [
  {
    rating: 5,
    text: "My favourite app that gave me extra discounts and cashback on brands like Amazon, Flipkart & Myntra. Using this app for a long time and I am really enjoying its features.",
    customer: "Madhuri Naik, Navi Mumbai"
  },
  {
    rating: 5,
    text: "Thank You, CouponGPT, for providing a cashback of ₹1549 on the Dell laptop order. I must say you are truly a genuine cashback website. This review is from the heart. You rock!",
    customer: "Shan Mallah, Rudrapur"
  },
  {
    rating: 5,
    text: "Lot of options variety easy to choose thank you! last week I redeemed my CouponGPT balance to Amazon. They gave full instructions about to redeem the amount. I redeemed my amount and feel very happy.",
    customer: "Umapathy Sankar, Patna"
  }
];

const About = () => {
  return (
    <Container>
      <Title>Why Choose <span>CouponGPT</span>?</Title>
      <HighlightsGrid>
        {highlights.map((highlight, index) => (
          <HighlightCard
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <IconContainer
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <img src={highlight.icon} alt={highlight.title} />
            </IconContainer>
            <HighlightTitle>{highlight.title}</HighlightTitle>
            <HighlightText>{highlight.description}</HighlightText>
          </HighlightCard>
        ))}
      </HighlightsGrid>

      <TestimonialsSection>
        <TestimonialsHeader>
          <h3>What Our Users Say</h3>
          <p>Discover why millions of shoppers trust CouponGPT for their online shopping needs</p>
        </TestimonialsHeader>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Stars>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    ★
                  </motion.span>
                ))}
              </Stars>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <CustomerInfo>
                <CustomerAvatar>
                  {testimonial.customer.split(' ')[0][0]}
                </CustomerAvatar>
                <CustomerDetails>
                  <h4>{testimonial.customer.split(',')[0]}</h4>
                  <p>{testimonial.customer.split(',')[1]}</p>
                </CustomerDetails>
              </CustomerInfo>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsSection>
    </Container>
  );
};

export default About; 