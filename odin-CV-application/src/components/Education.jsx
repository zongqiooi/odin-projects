import "../styles/style.css";

const Education = ({ schoolName, titleStudy, startDate, endDate }) => {
  return (
    <div className="education-container">
      <h3>Education</h3>
      <div className="resume-flex-box-container">
        <div>School Name: {schoolName} </div>
        <div>Title of Study: {titleStudy} </div>
        <div>
          Study Period: {startDate} - {endDate}{" "}
        </div>
      </div>
    </div>
  );
};

export default Education;
