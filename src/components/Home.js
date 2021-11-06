import React from "react";
import Header from "./Header";
import Product from "./Product";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";

function Home() {
  return (
    <div>
      {/* header */}
      <Header />
      <div className="home">
        {/* banner */}
        <div className="home__container">
          <Carousel>
            <Carousel.Item>
              <img
                className="home__image"
                src="/images/banner1.jpg"
                alt="prime-student"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="home__image"
                src="/images/banner2.jpg"
                alt="black-friday"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="home__image"
                src="/images/banner3.jpeg"
                alt="fire-stick"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* 1st row */}
        <div className="home__row">
          <Product
            id="00001"
            title="DYSON V12 Slim Absolute Akkusauger"
            price={549}
            rating={5}
            image="/images/prod1.webp"
          />
          <Product
            id="00002"
            title="APPLE AirPods 3. Generation"
            price={199}
            rating={3}
            image="/images/prod2.webp"
          />
          <Product
            id="00003"
            title="APPLE AirTag 1er Pack Tracker Weiß/Silber"
            price={35}
            rating={4}
            image="/images/prod3.webp"
          />
        </div>

        {/* 2nd row */}
        <div className="home__row">
          <Product
            id="00004"
            title="LG 35WN75C-B Curved UltraWide™ Monitor 35 Zoll QHD Monitor"
            price={519}
            rating={4}
            image="/images/prod4.webp"
          />
        </div>

        {/* 3rd row */}
        <div className="home__row">
          <Product
            id="00005"
            title="PROFICOOK PC-DKI 1067 Kochplatte (Kochfelder: 2)"
            price={189}
            rating={3}
            image="/images/prod5.webp"
          />
          <Product
            id="00006"
            title="SAMSUNG Galaxy Z Flip3 256 GB Phantom Lavender Dual"
            price={1099}
            rating={5}
            image="/images/prod6.webp"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
