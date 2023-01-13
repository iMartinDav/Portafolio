import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Martin DAVILA </span>
            from <span className="purple"> The World 🌎 to the 🪐.</span>
            <br />I am a Full Stack Bioinformatics Engineer.
            <br />
            <br />
            Apart from coding life, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Pokemon Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Know Cultures through their Food
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Knowing how to code is not a great power, but how you apply it to others is what truly makes a
          difference in the world. Use your knowledge and skills to empower and uplift those around you,
          and together we can build a brighter future for all."{" "}
          </p>
          <footer className="blockquote-footer">Martin DAVILA</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
