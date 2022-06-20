import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Hi All, I'm{" "}
              </h1>

              <h1 className="heading-name">
                <strong className="main-name">William Burns</strong>
              </h1>

              <div style={{ padding: 45, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
          <Row>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: 175,
              }}
            >
              <div className="scroll-downs">
                <div className="mousey">
                  <div className="scroller"></div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
