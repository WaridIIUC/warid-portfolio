import React from "react";
import Header from "../Header/Header";
import "./Resume.css";

const Resume = () => {
  return (
    <div>
    <Header></Header>
    <div className="container resume">
      <div className="row">
        <div className="col-md-10">
          <h1 className="resume-title text-center">Resume</h1>
          <p className="resume-descriptiom">
            As a Beginner in the Industrial field, I have excellence of
            expertise in full stack development. I believe that, development
            techniques and tools are not only factors to be a leading software
            developer, but also programming skills, debugging capacity,
            patience, passion are the finest factors in this field which all I
            have. I want to be skilled & reliable Web Developer to obtain a
            challenging & rewarding Web Development position, where my knowledge
            of coding will be beneficial to the company.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-8 section__resume resume-list">
          <h3 class="resume-list_title">education</h3>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
              International Islamic University Chittagong{" "}
            </p>
            <p class="resume-list__block-date">2016 - 2020</p>
            <p>Computer Science & Engineering</p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
              Govt. City College, Chittagong.
            </p>
            <p class="resume-list__block-date">2013 - 2015</p>
            <p>
              Science
            </p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">Lorem Ipsum School</p>
            <p class="resume-list__block-date">2003 - 2006</p>
            <p>
              Student, Lorem ipsum dolor sit amet, consecte tur adipisicing
              elit, sed do eiusmod tempor incididunt ut
            </p>
          </div>
        </div>
      </div>

        {/* work */}
      <div class="row">
        <div class="col-md-10 section__resume resume-list">
          <h3 class="resume-list_title">Web Development Skills</h3>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
            Competence{" "}
            </p>
            
            <p>React.js, Node.js, Express.js, MongoDB,  JavaScript(ES6), Asp.net, Asp.net Core, jQuery, SQL</p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
            Comfortable{" "}
            </p>
            
            <p>Bootstrap5, CSS3 Font-awesome, Material UI,  MVC,	Postman, Figma.</p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
            Familiar{" "}
            </p>
            
            <p>Redux, SASS, Development Life Cycle.</p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
            IDE Proficiency{" "}
            </p>
            
            <p>Visual Studio 2019, Visual Studio Code,  Google Colab.</p>
          </div>
          
        </div>

        
      </div>

      {/* working experiance */}
      <div class="row">
        <div class="col-md-10 section__resume resume-list">
          <h3 class="resume-list_title">Working Experience</h3>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
            Asp.net, MVC (2019 – Present){" "}
            </p>
            
            {/* <p>React.js, Node.js, Express.js, MongoDB,  JavaScript(ES6), Asp.net, Asp.net Core, jQuery, SQL</p> */}
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
            Asp.net Core (2021 – Present){" "}
            </p>
            
            {/* <p>Bootstrap5, CSS3 Font-awesome, Material UI,  MVC,	Postman, Figma.</p> */}
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
            MERN Stack (2021 – Present){" "}
            </p>
            
            {/* <p>Redux, SASS, Development Life Cycle.</p> */}
          </div>
         
          
        </div>
      </div>

      {/* programming skills */}
      <div class="row">
        <div class="col-md-10 section__resume resume-list">
          <h3 class="resume-list_title">Programming Skill</h3>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
            Solved a good number of  problems(300+) in different  online judges like Uva, URI,  Hacker rank etc.
            </p>
            
            {/* <p>React.js, Node.js, Express.js, MongoDB,  JavaScript(ES6), Asp.net, Asp.net Core, jQuery, SQL</p> */}
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
            Achieved: First position in 4th  Semester Programming  Contest.{" "}
            </p>
            
            {/* <p>Bootstrap5, CSS3 Font-awesome, Material UI,  MVC,	Postman, Figma.</p> */}
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
            URI Id: 156892{" "}
            </p>
            
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
            UVA Id: 898734{" "}
            </p>
            
          </div>
         
          
        </div>
      </div>

      {/* Professional Experience
      <div class="row">
        <div class="col-md-10 section__resume resume-list">
          <h3 class="resume-list_title">Professional Experience</h3>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
            Designation{" "}
            </p>
            
            <p>Software Engineer (Trainee)</p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
            Company Name{" "}
            </p>
            
            <p>CodersLab</p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">
            Website{" "}
            </p>
            <p><a target="_blank" href="https://www.coderslab.com.bd">CodersLab</a></p>
            
          </div>
         
          
        </div>
      </div>
      */}
    </div> 
    </div>
  );
};

export default Resume;
