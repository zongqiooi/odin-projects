import { useState } from "react";
import InputForm from "./components/InputForm";
import Resume from "./components/Resume";
import "./styles/style.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [education, setEducation] = useState({
    schoolName: "",
    titleStudy: "",
    startDate: "",
    endDate: "",
  });

  const handleName = (childData) => {
    setName(childData);
  };

  const handleEmail = (childData) => {
    setEmail(childData);
  };

  const handlePhoneNumber = (childData) => {
    setPhoneNumber(childData);
  };

  const handleEducation = (type, childData) => {
    if (type === "schoolName") {
      setEducation({ ...education, schoolName: childData });
    } else if (type === "titleStudy") {
      setEducation({ ...education, titleStudy: childData });
    } else if (type === "startDate") {
      setEducation({ ...education, startDate: childData });
    } else if (type === "endDate") {
      setEducation({ ...education, endDate: childData });
    }
  };

  return (
    <div className="grid-container">
      <InputForm
        setNameCallback={handleName}
        setEmailCallback={handleEmail}
        setPhoneNumberCallback={handlePhoneNumber}
        setEducationCallback={(type, childData) =>
          handleEducation(type, childData)
        }
      ></InputForm>
      <Resume
        name={name}
        email={email}
        phoneNumber={phoneNumber}
        education={education}
      ></Resume>
    </div>
  );
}

export default App;
