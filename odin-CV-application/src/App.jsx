import { useState } from "react";
import InputForm from "./components/InputForm";
import Resume from "./components/Resume";
import "./styles/style.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleName = (childData) => {
    setName(childData);
  };

  const handleEmail = (childData) => {
    setEmail(childData);
  };

  const handlePhoneNumber = (childData) => {
    setPhoneNumber(childData);
  };

  return (
    <div className="grid-container">
      <InputForm
        setNameCallback={handleName}
        setEmailCallback={handleEmail}
        setPhoneNumberCallback={handlePhoneNumber}
      ></InputForm>
      <Resume name={name} email={email} phoneNumber={phoneNumber}></Resume>
    </div>
  );
}

export default App;
