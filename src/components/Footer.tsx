import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiCodeship } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Built From Scratch With 💚 by Martin DAVILA</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} All Rights Reserved to GPT-4</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/iMartinDav"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/iMartinDav"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXLine />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/imartindav/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://opensea.io/iMartinDav"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiCodeship />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
