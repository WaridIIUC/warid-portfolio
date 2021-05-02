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
          <h3 class="project-card__title mt-5">Early Rider</h3>
          <p class="project-card__description">
          Rider Reserve Website 
          Features:
User can reserve a ride (Bike, Bus, Train, Car), see his booking status, Login System using Google, Facebook, Custom Email Address.

          </p>
          <p class="project-card__stack">Used Technologies:</p>
          <ul class="tags">
            <li>React.js</li>
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