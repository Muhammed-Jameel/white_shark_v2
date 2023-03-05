import React from "react";
import Footer from "../../components/Footer";
import { Column, Row } from "../../components/LayoutGrid";
import NavBar from "../../components/NavBar";
import LoaayPohto from '../../assets/photos/loaayphotoweb.png'

const Trainers = () => {
  return (
    <>
      <NavBar />
      <Row className="class-card">
        <Column span="6" className="class-text">
          <h1>Loaay</h1>
          <p>
            {" "}
            is a highly motivated and experienced male gym trainer who
            specializes in strength training and muscle building. He has a
            passion for helping clients reach their fitness goals through
            personalized workout plans and nutrition advice.
          </p>

          <a href="https://www.flaticon.com">Talk to</a>
        </Column>

        <Column span="6" className="trainer-image">
        <img src={LoaayPohto} alt="Loaay" />

        </Column>


      </Row>

      <Row className="class-card">
        <Column span="6" className="class-text">
          <h1>Loaay</h1>
          <p>
            {" "}
            is a highly motivated and experienced male gym trainer who
            specializes in strength training and muscle building. He has a
            passion for helping clients reach their fitness goals through
            personalized workout plans and nutrition advice.
          </p>

          <a href="https://www.flaticon.com">Talk to</a>
        </Column>

        <Column span="6" className="trainer-image">
        <img src={LoaayPohto} alt="Loaay" />

        </Column>


      </Row>

      <Row className="class-card">
        <Column span="6" className="class-text">
          <h1>Loaay</h1>
          <p>
            {" "}
            is a highly motivated and experienced male gym trainer who
            specializes in strength training and muscle building. He has a
            passion for helping clients reach their fitness goals through
            personalized workout plans and nutrition advice.
          </p>

          <a href="https://www.flaticon.com">Talk to</a>
        </Column>

        <Column span="6" className="trainer-image">
        <img src={LoaayPohto} alt="Loaay" />

        </Column>


      </Row>
      <Footer />
    </>
  );
};

export default Trainers;
