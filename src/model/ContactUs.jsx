import  { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Box from "@mui/material/Box";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: "New Enquiry",      
      name: form.name,          
      email: form.email,
      mobile: form.mobile,
      message: form.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_i5g8zze",    //  Service ID
        "template_bjnwib9",   //  Template ID
        formData,
        "GdCzJ8LD9OhVD7Wa-"   //  Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
         
           toast.success("Form submitted and email sent! !");
          setForm({ name: "", email: "", mobile: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send email. Please try again! !");
        }
      );
  };

  return (
    <div  id="contact-us">
    <ToastContainer/>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "blue",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        Contact Us
      </h1>

      <Box style={{ backgroundColor: "#000B23",width:"100%",}}>
        <Row className="justify-content-md-center">
          {/* Google Maps Section */}
          <Col xs lg="6">
            <div style={{ width: "100%", height: "500px", paddingTop: "30px" }}>
              <iframe
                title="Shop Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.896590403044!2d77.79254887396957!3d20.948955580680444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a534556843fd%3A0xe189158902887ec1!2sSapphire%20Electronics%20Audio%20%26%20Video%20Solution!5e1!3m2!1sen!2sin!4v1754914978979!5m2!1sen!2sin"
                width="450"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <Box sx={{ fontSize: "1rem", fontWeight: "bold", color: "white" }}>
                📞 8421363540
              </Box>
              <Box sx={{ fontSize: "1rem", fontWeight: "bold", color: "white" }}>
                ✉️ swapnil4myself@gmail.com
              </Box>
              <Box sx={{ fontSize: "1rem", fontWeight: "bold", color: "white" }}>
                ⏰ Timing: Mon–Sat 10:00–19:00 (Please call before visiting)
              </Box>
            </div>
          </Col>

          {/* Contact Form Section */}
          <Col xs lg="3" className="mt-2" style={{ color: "white" }}>
            <EnquiryForm
              form={form}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </Col>
        </Row>
      </Box>
    </div>
  );
}

function EnquiryForm({ form, handleChange, handleSubmit }) {
  return (
    <div className="container">
      <h5 className="text-center mb-3">Enquiry Form</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={3}
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="success" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
