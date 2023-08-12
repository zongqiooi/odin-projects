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
  const [work, setWork] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    workPeriod: "",
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

  const handleWork = (type, childData) => {
    if (type === "companyName") {
      setWork({ ...work, companyName: childData });
    } else if (type === "positionTitle") {
      setWork({ ...work, positionTitle: childData });
    } else if (type === "responsibilities") {
      setWork({ ...work, responsibilities: childData });
    } else if (type === "startDate") {
      setWork({ ...work, startDate: childData });
    } else if (type === "endDate") {
      setWork({ ...work, endDate: childData });
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
        setWorkCallback={(type, childData) => handleWork(type, childData)}
      ></InputForm>
      <Resume
        name={name}
        email={email}
        phoneNumber={phoneNumber}
        education={education}
        work={work}
      ></Resume>
    </div>
  );
}

export default App;
