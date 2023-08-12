import "../styles/style.css";

const WorkExperience = ({
  companyName,
  positionTitle,
  responsibilities,
  startDate,
  endDate,
}) => {
  return (
    <div className="work-experience-container">
      <h3>Work Experience</h3>
      <div className="resume-flex-box-container">
        <div>Company Name: {companyName} </div>
        <div>Position Title: {positionTitle}</div>
        <div>Main Responsibilities: {responsibilities}</div>
        <div>
          Work Period: {startDate} - {endDate}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
