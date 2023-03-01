import React from "react";
import NavBar from "../../components/NavBar";
import { Column, Row } from "../../components/LayoutGrid";
import "../PagesStyles.css";
import {
  WorkoutVideo,
  HiitVideo,
  YogaVideo,
  PilatesViseo,
} from "../../assets/videos";
import Footer from "../../components/Footer";

const Classes = () => {
  return (
    <>
      <NavBar />
      <Row className="class-card">
        <Column span="6" className="class-text">
          <h1>Strength training</h1>

          <p>
            Strength training{" "}
            <span className="highlighted">involves resistance</span> exercises
            to build muscle and improve strength, with benefits including
            increased muscle mass,{" "}
            <span className="highlighted">improved bone density</span>, and
            reduced injury risk, a personal trainer can help create a customized
            program.
          </p>

          <a href="https://www.aldiwan.net/poem4432.html" target=" "> Take the class</a>
        </Column>

        <Column span="6">
          <video
            src={WorkoutVideo}
            autoPlay
            muted
            loop
            className="class-video"
          ></video>
        </Column>
      </Row>
      <Row className="class-card">
        <Column span="6" className="class-text">
          <h1>Yoga</h1>

          <p>
            Join our yoga class for a revitalizing experience. Our expert
            instructor leads poses and breathing exercises to{" "}
            <span className="highlighted">enhance flexibility</span>, strength,
            balance, and inner peace.
          </p>

          <a href="https://www.aldiwan.net/poem4432.html" target=" "> Take the class</a>
        </Column>

        <Column span="6">
          <video src={YogaVideo} autoPlay muted className="class-video"></video>
        </Column>
      </Row>
      <Row className="class-card">
        <Column span="6" className="class-text">
          <h1>Pilates</h1>

          <p>
            A low-impact form of exercise that focuses on building core strength
            and <span className="highlighted">improving posture</span>.
          </p>

          <a href="https://www.aldiwan.net/poem4432.html" target=" "> Take the class</a>
        </Column>

        <Column span="6">
          <video
            src={PilatesViseo}
            autoPlay
            loop
            muted
            className="class-video"
          ></video>
        </Column>
      </Row>

      <Row className="class-card">
        <Column span="6" className="class-text">
          <h1>High-Intensity Interval Training</h1>

          <p>
            <span className="highlighted">A fast-paced workout</span> that
            alternates between high-intensity exercises and periods of rest.
          </p>

          <a href="https://www.aldiwan.net/poem4432.html" target=" "> Take the class</a>
        </Column>

        <Column span="6">
          <video
            src={HiitVideo}
            autoPlay
            loop
            muted
            className="class-video"
          ></video>
        </Column>
        
      </Row>
      <Footer />
    </>
  );
};

export default Classes;
