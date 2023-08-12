import "../styles/style.css";
import Education from "./Education";

const Resume = ({ name, email, phoneNumber, education }) => {
  return (
    <div className="resume-container">
      <div className="general-information-container">
        <h3>General Information</h3>
        <div className="resume-flex-box-container">
          <div>Name: {name}</div>
          <div>Email: {email}</div>
          <div>Phone number: {phoneNumber}</div>
        </div>
      </div>
      <Education
        schoolName={education.schoolName}
        titleStudy={education.titleStudy}
        startDate={education.startDate}
        endDate={education.endDate}
      />
      <div className="work-experience-container">
        <h3>Work Experience</h3>
        <div className="resume-flex-box-container">
          <div>Company Name: </div>
          <div>Position Title: </div>
          <div>Main Responsibilities: </div>
          <div>Work Period: </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
