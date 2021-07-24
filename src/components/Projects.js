import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import marvel from "./images/marvel-character_search.png";
import password from "./images/password-generator.png";
import quiz from "./images/code-quiz-challenge.png";
import workday from "./images/work_day-scheduler.png";
import optimize from "./images/horiseon2.png";

export default function Projects() {
  return (
    <div>
      <Carousel>
        <div>
          <img src={marvel} alt="marvel" className="marvel" />
          <h2>
            <a href="https://mcm1015.github.io/PR1_Marvel/">Third Party APIs</a>
          </h2>
        </div>
        <div>
          <img src={password} alt="password-gen" className="password-gen" />
          <h2>
            <a href="https://reggiemace.github.io/password_generator/">
              Local Storage and Moments
            </a>
          </h2>
        </div>
        <div>
          <img src={quiz} alt="" className="code-quiz" />
          <h2>
            <a href="https://reggiemace.github.io/code-quiz/">
              Local Storage and Moments
            </a>
          </h2>
        </div>
        <div>
          <img src={workday} alt="workday" className="workday" />
          <h2>
            <a href="https://reggiemace.github.io/work-day-scheduler/">
              Local Storage and Moments
            </a>
          </h2>
        </div>
        <div>
          <img src={optimize} alt="horiseon" className="horiseon" />
          <h2>
            <a href="https://reggiemace.github.io/refactor_code/">
              HTML and CSS{" "}
            </a>
          </h2>{" "}
        </div>
      </Carousel>
    </div>
  );
}
