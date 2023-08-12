import "../styles/style.css";

const Resume = ({ name = "", email = "", phoneNumber = "" }) => {
  return (
    <div className="resume-container">
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Phone number: {phoneNumber}</div>
      <div>Education</div>
      <div>Work Experience</div>
    </div>
  );
};

export default Resume;
