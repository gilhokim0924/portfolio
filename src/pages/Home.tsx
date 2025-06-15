import React from 'react';
import '../css/Home.css'; 

const Home: React.FC = () => {
  return (
    <body>
      <section id = "profile">
        <div className="profile-picture">
          <img src = "public/profile_picture.jpeg" alt = "Profile" />
        </div>
        <div className="profile-text-links">
          <div className="profile-text">
            <p>Annyeonghaseyo, I'm</p>
            <p>Gilho</p>
            <p>Computer Scientist</p>
          </div>
          <div className="profile-links">
            <a href="https://github.com/gilhokim0924" target="_blank">
                <img src = "public/github.svg" alt = "GitHub" className="profile-link-img"/>
            </a>
            <a href="https://www.linkedin.com/in/gilho-kim/" target="_blank">
                <img src = "public/linkedin.svg" alt = "Linkedin" className="profile-link-img"/>
            </a>
            <a href="https://www.youtube.com/@g_il__h_o__" target="_blank">
                <img src = "public/youtube.svg" alt = "Youtube" className="profile-link-img"/>
            </a>
          </div>
        </div>
      </section>

      <section id = "education">

      </section>
      <section id = "experience">

      </section>
      <section id = "projects">

      </section>
    </body>
  );
}

export default Home;