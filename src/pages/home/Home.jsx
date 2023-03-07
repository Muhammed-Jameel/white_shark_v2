import React from "react";
import PrimaryButton from "../../components/PrimaryButton";

import { Column, Row } from "../../components/LayoutGrid";
import "../PagesStyles.css";
import DiscountContainer from "../../components/DiscountContainer";
import {
  TrainerAhmed,
  TrainerHamza,
  TrainerSarah,
  BoxingClass2,
  StreetFightClass,
  GymnasticsClass,
} from "../../assets/images/webp";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const Home = () => {
  return (
    <>
    <NavBar/>
      <Row>
        <Column span="6">
          <div className="cta-text">
            <h1>Train, Build & Gain</h1>
            <h4>
              Are you tired of feeling sluggish and lacking energy? Want to get
              in shape and improve your overall health? Look no further! Our gym
              is here to help you achieve your fitness goals and live a
              healthier, happier life.
            </h4>
            <PrimaryButton btnText="Join us" />
          </div>
        </Column>

        <Column span="6">
          <div className="landing-page-image"></div>
        </Column>
      </Row>
      <DiscountContainer />

      <Row className="landing-page-containers-margin">
        <Column span="6">
          <h2 className="Landing-Page-Titles">Top Trainers</h2>
          <p className="Landing-Page-Text">
            highly qualified and experienced professionals, dedicated to helping
            you reach your fitness goals. They bring a wealth of knowledge and
            expertise to the table, and are committed to providing personalized
            training and support to ensure you get the results you desire.
          </p>
        </Column>

        <Column span="6" >
          <div className="gallery">
            <img src={TrainerAhmed} alt="ahmed" />
            
            <img src={TrainerSarah} alt="Sarah" />
            
            <img src={TrainerHamza} alt="Hamza" />
            
  
             
            
            
          </div>
        </Column>
      </Row>

      <Row className="landing-page-containers-margin">
        <Column span="6" >
          <div className="gallery">
            <img src={BoxingClass2} alt="Boxing" />
            <img src={StreetFightClass} alt="StreetFight" />
            <img src={GymnasticsClass} alt="Gymnastics" />
          </div>
        </Column>
        <Column span="6">
          <h2 className="Landing-Page-Titles">Top classes</h2>
          <p className="Landing-Page-Text">
            Our gym offers a wide range of classes to meet the needs and
            interests of all our members.
          </p>
        </Column>
      </Row>
      <Footer />
    </>
  );
};

export default Home;
