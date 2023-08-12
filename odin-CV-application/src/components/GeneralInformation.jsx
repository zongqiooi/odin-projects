import React from "react";
import "../styles/style.css";

const GeneralInformation = ({ name, email, phoneNumber }) => {
  return (
    <div className="general-information-container">
      <h3>General Information</h3>
      <div className="resume-flex-box-container">
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Phone number: {phoneNumber}</div>
      </div>
    </div>
  );
};

export default GeneralInformation;
