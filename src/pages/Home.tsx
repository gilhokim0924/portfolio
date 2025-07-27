import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import '../css/Home.css'; 

type HomeProps = {
  contactModal: boolean;
  closeContact: () => void;
}


const Home: React.FC<HomeProps> = ({contactModal, closeContact}) => {
  // Dummy data for experiences and projects
  const experiencesData = [
    {
      link: "/roka",
      image: "/experience/roka_logo.jpg",
      alt: "ROKA Logo",
      company: "Republic of Korea Army",
      date: "July 2021 - January 2023",
      position: "Sergeant",
    },
    {
      image: "/experience/igc_logo.png",
      alt: "IGC Logo",
      company: "Incheon Global Campus Library",
      date: "February 2023 - June 2024",
      position: "Student Library Assistant",
    },
    {
      image: "/experience/mediearth_logo.png",
      alt: "Mediearth Logo",
      company: "MediEarth",
      date: "October 2023 - December 2023",
      position: "Freelance Software Developer",
    },
    {
      image: "/experience/bcl_logo.png",
      alt: "BCL Logo",
      company: "Brain-Inspired Computing Lab",
      date: "June 2024 - July 2025",
      position: "Undergraduate Research Assistant",
    },
  ];

  const projectData = [
    {
      image: "/project/lava_project.png",
      alt: "SDNN",
      title: "Advanced Training Algorithms in Sigma-Delta Spiking YOLO for Energy-Efficient Object Detection on Neuromorphic Hardware",
      type: "Research Paper",
    },
    {
      image: "/project/startup.jpg",
      alt: "Startup Package Program",
      title: "2025 Preliminary Startup Package program organized by the Ministry of SMEs and Startups (MSS) of Korea",
      type: "Government Startup Program",
    },
    {
      image: "/projects/project3.png",
      alt: "Project 3",
      title: "Project 3",
    },
    {
      image: "/projects/project4.png",
      alt: "Project 4",
      title: "Project 4",
    },
  ]

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
              Hello! I'm Gilho. I was born in Suwon, South Korea, but I have spent my middle and high school years in Thailand. I have received a computer science degree from Stony Brook University with interests in Artificial Intelligence and Software Development. I love exploring new technologies related to A.I. and Software Development. Personally, I love to explore new places and countries for more variable experiences.
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
        <div className="experience-container">
          <Swiper
            className="experience-swiper"
            effect={"coverflow"}
            grabCursor={true} 
            centeredSlides={true}
            coverflowEffect={{
                rotate: 0,
                stretch: 5,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
            }}
            spaceBetween={20}
            breakpoints={{
              900: {slidesPerView: 1, centeredSlides: false, spaceBetween: 10, effect: "none"},
              901: {slidesPerView: 3, centeredSlides: true, spaceBetween: 20, effect:"coverflow"},
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            
            modules={[EffectCoverflow, Pagination, Scrollbar, A11y, Autoplay]}
          >
            {experiencesData.map((data, index) => (
              <SwiperSlide key={index} className="experience-swiper-card">
                <div className="experience-card">
                  <div className="experience-card-image">
                    <img src={data.image} alt={data.alt} />
                  </div>
                  <div className="experience-card-text">
                    <p>{data.company}</p>
                    <p>{data.date}</p>
                    <br></br>
                    <p>{data.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section id="projects">
        <div className="experience-container">
          <Swiper
            className="experience-swiper"
            effect={"coverflow"}
            grabCursor={true} 
            centeredSlides={true}
            coverflowEffect={{
                rotate: 0,
                stretch: 5,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
            }}
            spaceBetween={20}
            breakpoints={{
              900: {slidesPerView: 1, centeredSlides: false, spaceBetween: 10, effect: "none"},
              901: {slidesPerView: 3, centeredSlides: true, spaceBetween: 20, effect:"coverflow"},
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            
            modules={[EffectCoverflow, Pagination, Scrollbar, A11y, Autoplay]}
          >
            {projectData.map((data, index) => (
              <SwiperSlide key={index} className="experience-swiper-card">
                <div className="experience-card">
                  <div className="experience-card-image">
                    <img src={data.image} alt={data.alt} />
                  </div>
                  <div className="experience-card-text">
                    <p>{data.title}</p>
                    <br></br>
                    <p>{data.type}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {contactModal && (
        <section id="contact">
          <div className="overlay">
            <div className="contact-container">
              <div className="contact-btn-container">
                <a href="/gilhokim.png" download>
                  <button className="contact-download-btn">
                    <MdOutlineFileDownload /></button>
                </a>
                <button className="contact-close-btn" 
                onClick={closeContact}><IoClose /></button>
              </div>
            </div>
          </div>
        </section>
      )}

    </body>
  );
}

export default Home;