import React,{useState} from "react";

import { Text, Button } from "../components";

import "../styles/screens/contactus.css";

import down_arrow from "../assets/icons/down_arrow.svg";
import map from "../assets/images/map.png";

import * as emailjs from "emailjs-com";
  import 'react-toastify/dist/ReactToastify.css';

//Importing notification package
import { toast, ToastContainer } from "react-toastify";

const initailState = {
  email: "",
  message: "",
  name: "",
};

const ContactusScreen = ({ pageScroll }) => {

    const [formData, setFormData] = useState(initailState);
     const [isLoad, setIsLoad] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validate() {
    if (
      formData.message === "" ||
      formData.email === "" ||
      formData.name === ""
    ) {
      toast.error("please fill the empty fields");
      return false;
    }
    return true;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const res = validateEmail(formData.email);
    const val = validate(formData);

    //if email id is invalid
    if (formData.email !== "" || res=== false) {
      if (!res) toast.error("Invalid Email Address");
    }

    if (res && val) {
      setIsLoad(true);
      const {
        email,
        name,
       message
      } = formData;

      let templateParams = {
        email,
        name,
        message,
      };

      emailjs
        .send(
          "service_m82lvre",
          "template_bc09cml",
          templateParams,
          "user_GIBdBagcpQO842DYfWDKO"
        )
        .then(
          (result) => {
                console.log(result)
            toast.dark(
              <div>
                <p style={{ marginBottom: 8 }}>Thanks for contacting us</p>
                <p>We will meet you soon</p>
              </div>
            );
            setFormData(initailState);
            setIsLoad(false);
          },
          (error) => {
            toast.error("Something went wrong");
            setFormData(initailState);
            setIsLoad(false);
          }
        );
    }
  };


  
  const renderHero = (
    <div
      className="hero"
      style={{ backgroundPositionY: `${pageScroll * 0.5}px` }}
    >
      <img src={down_arrow} alt="arrow" />
      <p className="title">CONTACT US</p>
    </div>
  );

  const renderForm = (
    <form  className="forms">
      <div>
        <Text fontSize="16px">Name *</Text>
        <p>
          <input name='name'  onChange={handleChange} placeholder="Enter your name" />
        </p>
      </div>
      <div>
        <Text fontSize="16px">Email Address *</Text>
        <p>
          <input name='email' onChange={handleChange} placeholder="Enter your email address" />
        </p>
      </div>
      <div>
        <Text fontSize="16px">Message</Text>
        <p>
          <textarea name='message' onChange={handleChange}  rows="4" placeholder="Enter your message" />
        </p>
      </div>
    </form>
  );

  const renderContactInfo = (
    <div className="contact_info padding_box">
      {renderForm}
      <div className="image">
        <img src={map} alt="map" />
      </div>
    </div>
  );
  return (
    <div className="contactus">
      <ToastContainer/>
      {renderHero}
      {renderContactInfo}
      <div style={{ marginTop: "2em" }} className="padding_box">
        <Button disabled={isLoad} onClick={handleSubmit}
          style={{ opacity: isLoad ? "0.5" : "1" }}
          className="primary_btn">Submit</Button>
      </div>
    </div>
  );
};

export default ContactusScreen;
