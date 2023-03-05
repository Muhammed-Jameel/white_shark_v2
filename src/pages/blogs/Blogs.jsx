import React from "react";
import { Row, Column } from "../../components/LayoutGrid";
import ArticlePhoto from "../../assets/photos/article3.jpg";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Blogs = () => {
  return (
    <>
      <NavBar />
      <Row className="class-card">
        <Column span="6" className="class-text">
          <h1>Why Working Out with Others Can Improve Your Health and Happiness</h1>
          

          <a href="https://www.flaticon.com">Read</a>
        </Column>

        <Column span="6" className="blogs-image">
          <img src={ArticlePhoto} alt="Loaay" />
        </Column>
      </Row>

      <Row className="class-card">
        <Column span="6" className="class-text">
          <h1>Why Working Out with Others Can Improve Your Health and Happiness</h1>
          

          <a href="https://www.flaticon.com">Read</a>
        </Column>

        <Column span="6" className="blogs-image">
          <img src={ArticlePhoto} alt="Loaay" />
        </Column>
      </Row>

      <Row className="class-card">
        <Column span="6" className="class-text">
          <h1>Why Working Out with Others Can Improve Your Health and Happiness</h1>
          

          <a href="https://www.flaticon.com">Read</a>
        </Column>

        <Column span="6" className="blogs-image">
          <img src={ArticlePhoto} alt="Loaay" />
        </Column>
      </Row>

      <Footer />
    </>
  );
};

export default Blogs;
