import React from "react";
import ReactPlayer from "react-player";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import videos from "../img/products/RepairVideos.json";

export default function RepairVideo() {
  return (
    <div
      id="repairVideo"
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#f4fbfd",
      }}
    >
      <Container style={{ marginTop: "50px" }}>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "blue",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          Video Gallery
        </h1>
        <Row className="g-3">
          {videos.map((video, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              style={{ display: "flex", justifyContent: "center" }}
            >
              {/* Wrapper ensures proper sizing */}
              <div style={{ width: "100%", maxWidth: "300px" }}>
                <video
                  src={video.videolink}
                  width="100%"
                  height="200"
                  controls
                  style={{ background: "black" }}
               / >
                 
                // <p style={{ marginTop: "8px", fontWeight: "500" }}>
                //   {video.title}
                // </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      
    </div>
  );
}
