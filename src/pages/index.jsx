

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease',
    arrows: false,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <div style={{ textAlign: "center", backgroundColor: "#f5f5f5", padding: "20px" }}>
      <h1 style={{ fontFamily: "Arial, sans-serif", fontSize: "32px", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>
        Portal de notificaciones
      </h1>
      <Slider {...settings}>
        <div>
          <img src="./images/Image1.jpg" alt="Hospital Image 1" style={{ display: "block", margin: "0 auto", maxWidth: "500px", height: "auto", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }} />
        </div>
        <div>
          <img src="./images/Image2.jpg" alt="Hospital Image 2" style={{ display: "block", margin: "0 auto", maxWidth: "500px", height: "auto", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }} />
        </div>
        <div>
          <img src="./images/Image3.jpg" alt="Hospital Image 3" style={{ display: "block", margin: "0 auto", maxWidth: "500px", height: "auto", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }} />
        </div>
      </Slider>
      <p style={{ fontFamily: "Arial, sans-serif", fontSize: "18px", color: "#666", marginTop: "20px" }}>
        ¡Bievenido al portal de notificaciones de la clínica CES! Donde podrás contactar y notificar al personal médico disponible en el hospital. 
      </p>
    </div>
  );
};


export default Index