import "../styles/style.css";
import { useState } from "react";

const InputForm = ({
  setNameCallback,
  setEmailCallback,
  setPhoneNumberCallback,
  setEducationCallback,
  setWorkCallback,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [education, setEducation] = useState({
    schoolName: "",
    titleStudy: "",
    startDate: "",
    endDate: "",
  });
  const [work, setWork] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    workPeriod: "",
  });

  return (
    <div className="form-container">
      <div className="section-container">
        <form action="">
          <div className="input-container">
            <label className="input-label">Name:</label>
            <input
              onChange={(event) => {
                setName(event.target.value);
                setNameCallback(event.target.value);
              }}
              type="text"
              className="input-field"
              value={name}
            ></input>
          </div>

          <div className="input-container">
            <label className="input-label">Email:</label>
            <input
              onChange={(event) => {
                setEmail(event.target.value);
                setEmailCallback(event.target.value);
              }}
              type="text"
              className="input-field"
              value={email}
            ></input>
          </div>
          <div className="input-container">
            <label className="input-label">Phone number:</label>
            <input
              onChange={(event) => {
                setPhoneNumber(event.target.value);
                setPhoneNumberCallback(event.target.value);
              }}
              type="text"
              className="input-field"
              value={phoneNumber}
            ></input>
          </div>
        </form>
      </div>

      <div className="section-container">
        <form action="">
          <div className="input-container">
            <label className="input-label">School Name:</label>
            <input
              onChange={(event) => {
                setEducation({ ...education, schoolName: event.target.value });
                setEducationCallback("schoolName", event.target.value);
              }}
              type="text"
              className="input-field"
              value={education.schoolName}
            ></input>
          </div>

          <div className="input-container">
            <label className="input-label">Title of Study:</label>
            <input
              onChange={(event) => {
                setEducation({ ...education, titleStudy: event.target.value });
                setEducationCallback("titleStudy", event.target.value);
              }}
              type="text"
              className="input-field"
              value={education.titleStudy}
            ></input>
          </div>
          <div className="input-container">
            <label className="input-label">Start Date of Study:</label>
            <input
              onChange={(event) => {
                setEducation({ ...education, startDate: event.target.value });
                setEducationCallback("startDate", event.target.value);
              }}
              type="text"
              className="input-field"
              value={education.startDate}
            ></input>
          </div>
          <div className="input-container">
            <label className="input-label">End Date of Study:</label>
            <input
              onChange={(event) => {
                setEducation({ ...education, endDate: event.target.value });
                setEducationCallback("endDate", event.target.value);
              }}
              type="text"
              className="input-field"
              value={education.endDate}
            ></input>
          </div>
        </form>
      </div>

      <div className="section-container">
        <form action="">
          <div className="input-container">
            <label className="input-label">Company Name:</label>
            <input
              onChange={(event) => {
                setWork({ ...work, companyName: event.target.value });
                setWorkCallback("companyName", event.target.value);
              }}
              type="text"
              className="input-field"
              value={work.companyName}
            ></input>
          </div>

          <div className="input-container">
            <label className="input-label">Position Title:</label>
            <input
              onChange={(event) => {
                setWork({ ...work, positionTitle: event.target.value });
                setWorkCallback("positionTitle", event.target.value);
              }}
              type="text"
              className="input-field"
              value={work.positionTitle}
            ></input>
          </div>
          <div className="input-container">
            <label className="input-label">Main Responsibilities:</label>
            <input
              onChange={(event) => {
                setWork({ ...work, responsibilities: event.target.value });
                setWorkCallback("responsibilities", event.target.value);
              }}
              type="text"
              className="input-field"
              value={work.responsibilities}
            ></input>
          </div>
          <div className="input-container">
            <label className="input-label">Start Date of Work:</label>
            <input
              onChange={(event) => {
                setWork({ ...work, startDate: event.target.value });
                setWorkCallback("startDate", event.target.value);
              }}
              type="text"
              className="input-field"
              value={work.startDate}
            ></input>
          </div>
          <div className="input-container">
            <label className="input-label">End Date of Work:</label>
            <input
              onChange={(event) => {
                setWork({ ...work, endDate: event.target.value });
                setWorkCallback("endDate", event.target.value);
              }}
              type="text"
              className="input-field"
              value={work.endDate}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
