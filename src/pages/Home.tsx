import React from 'react';
import { useState, useEffect } from 'react';

import '../css/Home.css'; 

const Home: React.FC = () => {

  return (
    <body>
      <section id = "profile">
        <div className="profile-picture">
          <img src = "/profile_picture.jpeg" alt = "Profile" />
        </div>
        <div className="profile-text-links">
          <div className="profile-text">
            <p>Annyeonghaseyo, I'm</p>
            <p>Gilho</p>
            <p>Computer Scientist</p>
          </div>
          <div className="profile-links">
            <a href="https://github.com/gilhokim0924" target="_blank">
                <img src = "/sns/github.svg" alt = "GitHub" className="profile-link-img"/>
            </a>
            <a href="https://www.linkedin.com/in/gilho-kim/" target="_blank">
                <img src = "/sns/linkedin.svg" alt = "Linkedin" className="profile-link-img"/>
            </a>
            <a href="https://www.youtube.com/@g_il__h_o__" target="_blank">
                <img src = "/sns/youtube.svg" alt = "Youtube" className="profile-link-img"/>
            </a>
          </div>
        </div>
      </section>

      <section id = "about">
        <div className="about-me-container">
          <div className="about-me-image">
            <img src="about_me_photo.jpg" alt="Profile Picture" />
          </div>
          <div className="about-me-text">
            <p>
              Hello! I'm Gilho from South Korea. I was born in Suwon, South Korea, but I have spent my middle and high school years in Thailand, my second home. I have received a computer science degree from Stony Brook University with a interest in Artificial Intelligence and Software Development. I love exploring new technologies related to A.I. and Software Development. Personally, I love to explore new places and countries for more variable experiences.
            </p>
          </div>

        </div>
        <div className="about-school-container">
          <a href="https://www.ics.ac.th" target="_blank" className="about-hs-container">
            <div className="about-school-logo"> 
              <img id="ics-logo" src="/education/ics_logo.png" alt="ICS Logo" />
            </div>
            <div className="about-school-text">
              <p className="school-name-text">International Community School of Bangkok</p>
              <p className="school-year-text">Class of 2020</p>
              <p className="school-about-text">GPA: 3.9117 / 4.0</p>
              <p className="school-about-text">Awards: Top Student Award (Beginner Tech)</p>
              <p className="school-about-text">Activities:
                JV Boys Volleyball · Varsity Boys Soccer · TEDxYouth@ICS Stage Manager · Musical Stage Manager (Best Christmas Pageant Ever, Bye Bye Birdie, Mulan, And Then There Were None)
              </p>
            </div>
          </a>
          <a href="https://www.stonybrook.edu" target="_blank" className="about-uni-container">
            <div className="about-school-logo"> 
              <img id="sbu-logo" src="/education/sbu_logo.png" alt="SBU Logo" />
            </div>
            <div className="about-school-text">
              <p className="school-name-text">Stony Brook University, New York</p>
              <p className="school-year-text">Class of 2024 (2026)</p> 
              <p className="school-about-text">Major: Computer Science</p>
              <p className="school-about-text">GPA: to be updated / 4.0</p>
              <p className="school-about-text">Awards: Academic Excellence Award</p>
              <p className="school-about-text">Activities:
                Member of Co;Ders (Stony Brook's Computer Science Club)
              </p>
            </div>
          </a>
        </div>
      </section>

      <section id="experience">

      </section>


    </body>
  );
}

export default Home;