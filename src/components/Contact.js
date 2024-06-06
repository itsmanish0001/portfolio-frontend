import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import toast from "react-hot-toast";

export const Contact = () => {


  const [buttonText, setButtonText] = useState('Send');
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [msg, setMsg] = useState("");






  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    // const obj = {
    //   firstName, lastName, email, phoneNo, msg
    // }
    const obj = {
      firstName, lastName, email, phoneNo, msg
    }

    try {
      let response = await fetch("https://portfolio-server-8lvp.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj),
      });
      
      setButtonText("Send");
      let result = await response.json();
      if(result.success){
        toast.success(result.message)
      }
      else{
        
          toast.error(result.message);
        
      }
      // console.log(result);
      setFirstName("");
      setEmail("");
      setLastName("");
      setMsg("");
      setPhoneNo("");
    }
    catch (error) {
      console.log(error);
    }


  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={firstName} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={lastName} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={email} placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={phoneNo} placeholder="Phone No." onChange={(e) => setPhoneNo(e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={msg} placeholder="Message" onChange={(e) => setMsg(e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>

                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
