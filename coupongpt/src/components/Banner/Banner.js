import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const BannerSlide = styled(motion.div)`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BannerText = styled.div`
  flex: 1;
`;

const BannerImage = styled.div`
  flex: 1;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const OfferText = styled.h2`
  color: #e41e31;
  font-size: 2.5rem;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubText = styled.p`
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const PromoCode = styled.div`
  display: inline-block;
  padding: 8px 16px;
  border: 2px dashed #e41e31;
  border-radius: 8px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: #e41e31;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const bannerData = [
    {
      title: "UP TO ₹500 OFF",
      subText: "On bus tickets",
      promoCode: "GRAB500",
      image: "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/banner/web/0f3a6d5e77f82f7d5498c9ff98d6e558/banner_home-580x1160.webp?657040"
    },
    {
      title: "50% OFF",
      subText: "On first order",
      promoCode: "FIRST50",
      image: "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/banner/web/d18c33a5193bce2fbbdd5b868334c887/banner_home-580x1160.webp?759109"
    },
    {
        title: "50% OFF",
        subText: "On first order",
        promoCode: "FIRST50",
        image: "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/banner/web/f035ae32f085bc77ee888f1ca4fa337e/banner_home-580x1160.webp?176135"
      }
  ];

  return (
    <BannerContainer>
      <Slider {...settings}>
        {bannerData.map((banner, index) => (
          <BannerSlide
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BannerContent>
              <BannerText>
                <OfferText>{banner.title}</OfferText>
                <SubText>{banner.subText}</SubText>
                <PromoCode>USE CODE: {banner.promoCode}</PromoCode>
                <Button>BOOK NOW</Button>
              </BannerText>
              <BannerImage>
                <motion.img
                  src={banner.image}
                  alt="offer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </BannerImage>
            </BannerContent>
          </BannerSlide>
        ))}
      </Slider>
    </BannerContainer>
  );
};

export default Banner; 