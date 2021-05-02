import React from 'react';
import khonik from "../../../images/projects/book-early-rider.png";
import "../Project.css";
const ProjectThree = () => {
    return (
        <div className="container">
      <div className="row project-one-card pt-5">
        <div className="col-md-6 project-one-image">
          <img style={{height:"100%"}} src={khonik} alt="" />
        </div>
        <div className="col-md-6 project-one-card-info">
          <h3 class="project-card__title mt-5">ক্ষনিক – Photography Partner </h3>
          <p class="project-card__description">
            A dynamic Photography Booking WebsiteA dynamic Photography Booking
            Website.
          </p>
          <p class="project-card__stack">Used Technologies:</p>
          <ul class="tags">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Firebase Auth</li>
            <li>Javascript(ES6)</li>
            <li>Bootstrap</li>
          </ul>
          <a
            href="https://book-early-rider.web.app/"
            class="project-card__link"
            target="_blank"
          >
            book-early-rider.web.app/
          </a>
        </div>
      </div>
    </div>
    );
};

export default ProjectThree;