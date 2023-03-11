import React from "react";
import { Link } from "react-router-dom";
import ArticlePhoto from "../../assets/photos/article3.jpg";
import Footer from "../../components/Footer";
import { Column, Row } from "../../components/LayoutGrid";
import NavBar from "../../components/NavBar";
import "../PagesStyles.css";
const Blog = () => {
  return (
    <>
      <NavBar />
      <Row className="blog-img">
        <img src={ArticlePhoto} alt="ArticlePhoto" />
      </Row>
      <Row className="blog-text">
        <Column>
          <h1>Simple Exercises for a Full-Body Workout at the Gym</h1>

          <p>
            When it comes to working out at the gym, many people assume that
            they need to spend hours lifting weights or running on the treadmill
            to get a full-body workout. However, with the right exercises, it's
            possible to target multiple muscle groups in just a few moves. Here
            are some simple exercises for a full-body workout at the gym:
          </p>

          <ol>
            <li>
              Squats - This classic exercise targets your glutes, quads, and
              hamstrings. Start by standing with your feet hip-width apart and
              your toes pointing forward. Bend your knees and lower your hips as
              if you're sitting down in a chair, making sure to keep your chest
              lifted and your weight in your heels. Straighten your legs to
              return to the starting position.
            </li>

            <li>
              Push-Ups - This exercise targets your chest, triceps, and
              shoulders. Begin in a plank position with your hands
              shoulder-width apart and your body in a straight line. Lower your
              chest towards the floor, keeping your elbows close to your body.
              Push back up to the starting position.
            </li>

            <li>
              Lunges - This exercise targets your glutes, quads, and hamstrings.
              Start by standing with your feet hip-width apart. Take a big step
              forward with your right foot, bending both knees to 90 degrees.
              Make sure your knee doesn't extend beyond your toes. Push off your
              right foot to return to the starting position and repeat on the
              other side.
            </li>

            <li>
              Rows - This exercise targets your upper back, shoulders, and
              biceps. Sit on a bench and hold a dumbbell in each hand. Lean
              forwardkeeping your back straight, and let your arms hang straight
              down towards the floor. Bend your elbows and lift the weights
              towards your chest, squeezing your shoulder blades together at the
              top.
            </li>

            <li>
              Plank - This exercise targets your core, including your abs and
              lower back. Begin in a push-up position, but instead of lowering
              down, hold yourself up on your forearms. Keep your body in a
              straight line from head to heels, engaging your core muscles to
              keep your hips from sagging.
            </li>
          </ol>
        </Column>

        <Column span="3" className="related-blogs">
        <div className="related-blogs-links">
          <a href="https://www.youtube.com/watch?v=YXuEG1fUaGU" target=" "> <h3>Teams can help</h3></a>
          <a href="https://www.youtube.com/watch?v=YXuEG1fUaGU" target=" "> <h3>Teams can help</h3></a>
          <a href="https://www.youtube.com/watch?v=YXuEG1fUaGU" target=" "> <h3>Teams can help</h3></a>
          <a href="https://www.youtube.com/watch?v=YXuEG1fUaGU" target=" "> <h3>Teams can help</h3></a>
        </div>
        </Column>
      </Row>
      <Footer />
    </>
  );
};

export default Blog;
