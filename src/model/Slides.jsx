import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/esm/Row";
import Container from "@mui/material/Container";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import slides from "../img/products/Slides.json";
function Slides() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={slide.img}  
              alt={`Slide ${index + 1}`}
              style={{ height: "380px", objectFit: "cover" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>


      <Container>
        <Row>
          <Col>
            <Card
              style={{ width: "15rem", backgroundColor: "#7daaeb" }}
              className="mb-2 mt-3"
            >
              <Card.Body>
                <Card.Text>
                  <b>10+ years</b>
                  <br />
                  <span>Of Experience</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "15rem", backgroundColor: "#7daaeb" }}
              className="mb-2 mt-3"
            >
              <Card.Body>
                <Card.Text>
                  <b>5000+</b>
                  <br />
                  <span>Devices Repaired</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "17rem", backgroundColor: "#7daaeb" }}
              className="mb-2 mt-3"
            >
              <Card.Body>
                <Card.Text>
                  <b>6 Months</b>
                  <br />
                  <span>Warranty on Repairs</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Slides;
