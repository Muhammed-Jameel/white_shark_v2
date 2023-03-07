import React, { useState } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import "../PagesStyles.css";

const BmiCalculator = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("You are under Weight, we suggest you to take a boxing class");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("You are good & healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("You are a little overweight, High-Intensity Interval Training");
    } else {
      setInfo(
        "You have some obese, we suggest you to take a High-Intensity Interval Training class"
      );
    }
  };
  return (
    <div>
      <NavBar />

      <div className="bmi-container">
        <h1>Body to index (BMI) calculator:</h1>
        <p>
          A quick, simple, and general indicator of healthy body weight helping
          to assess the risk of weight-related health issues.
        </p>
        <div className="bmi-calc">
          <input
            type="text"
            onChange={(e) => setHeight(e.target.value)}
            placeholder="height in cm"
          />
          <input
            type="text"
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight in kg"
          />
          <button onClick={handleBmi} className="bmi-btn">Calculate</button>
        </div>
        <h1>
          {" "}
          your bmi is <span className="highlighted"> {bmi}</span> {info}
        </h1>
      </div>

      <Footer />
    </div>
  );
};

export default BmiCalculator;
