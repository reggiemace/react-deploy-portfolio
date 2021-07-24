import cartoon from "./images/resume-long-1.jpeg";
import myResume from "./docs/resume.pdf";

import React from "react";

const Resume = () => {
  return (
    <div className="resume">
      <div>
        <a href={myResume}>View Resume</a>
      </div>

      <img className="resume_image" src={cartoon} alt="" />
    </div>
  );
};

export default Resume;
