
import React from "react";
import Nav from "react-bootstrap/Nav";
import Carousel from "react-bootstrap/Carousel";
import "./home.css"
import home from "../assets/Medicare.png";
function Home() {
  return (
    <>
      

      <Carousel>
        <Carousel.Item>
          <img
            className="home1"
            src={home}
            alt="Medicare Hospital"
            style={{  width:"100%", height: "70vh" ,objectFit: "cover",  objectPosition:"center"}}
          />
          <Carousel.Caption>
            <h3>Welcome to Medicare Hospital</h3>
            <p>Quality Healthcare for Everyone</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="home2"
            src={home}
            alt="Hospital Care"
            style={{  width:"100%", height: "70vh" ,objectFit: "cover",  objectPosition:"center"}}
          />
          <Carousel.Caption>
            <h3>Expert Medical Care</h3>
            <p>Your health is our priority.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="home3"
            src={home}
            alt="Hospital Doctors"
            style={{  width:"100%", height: "70vh" ,objectFit: "cover",  objectPosition:"center"}}
          />
          <Carousel.Caption>
            <h3>Experienced Doctors</h3>
            <p>Care you can trust.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      
      
      <div className="mid">
    <h2>Welcome to Medicare Hospital</h2>
    <p>We provide quality medical services with advanced technology,compassionate healthcare professionals, and dedicated support for every patient and family</p>
    </div>
   
  
    </>
      

  );
}

export default Home;
