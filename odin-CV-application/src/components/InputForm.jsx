import "../styles/style.css";
import { useState } from "react";

const InputForm = ({
  setNameCallback,
  setEmailCallback,
  setPhoneNumberCallback,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
    </div>
  );
};

export default InputForm;
