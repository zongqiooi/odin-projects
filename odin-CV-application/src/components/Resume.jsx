import "../styles/style.css";
import Education from "./Education";
import GeneralInformation from "./GeneralInformation";
import WorkExperience from "./WorkExperience";

const Resume = ({ name, email, phoneNumber, education, work }) => {
  return (
    <div className="resume-container">
      <GeneralInformation name={name} email={email} phoneNumber={phoneNumber} />
      <Education
        schoolName={education.schoolName}
        titleStudy={education.titleStudy}
        startDate={education.startDate}
        endDate={education.endDate}
      />
      <WorkExperience
        companyName={work.companyName}
        positionTitle={work.positionTitle}
        responsibilities={work.responsibilities}
        startDate={work.startDate}
        endDate={work.endDate}
      />
    </div>
  );
};

export default Resume;
