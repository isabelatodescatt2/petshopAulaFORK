import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import bannerUm from '../imagens/Banner-01.jpg';
import bannerDois from '../imagens/banner.jpg';
import bannerTres from '../imagens/banho-e-tosa.png'

function Banner() {
  return (
    <Carousel>

      <Carousel.Item interval={3500}>
        <img src={bannerUm} className="carousel-img" alt="Banner 1" />
      </Carousel.Item>

      <Carousel.Item interval={3500}>
        <img src={bannerDois} className="carousel-img" alt="Banner 2" />
      </Carousel.Item>

      <Carousel.Item interval={3500}>
        <img src={bannerTres} className="carousel-img" alt="Banner 3" />
      </Carousel.Item>

    </Carousel>
  );
}

export default Banner;

