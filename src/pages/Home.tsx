import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/effect-coverflow";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/scrollbar";

import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import '../css/Home.css'; 

type HomeProps = {
  contactModal: boolean;
  closeContact: () => void;
}


const Home: React.FC<HomeProps> = ({contactModal, closeContact}) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to section on return
  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, [location]);

  // Dummy data for experiences and projects
  const experiencesData = [
    {
      link: "https://www.army.mil.kr/english/index.do",
      image: "experience/roka_logo.jpg",
      alt: "ROKA Logo",
      company: "Republic of Korea Army",
      date: "Jul 2021 - Jan 2023 · 1 yr 7 mos",
      position: "Army Sergeant · Full-time",
      description: "Served as an Army Sergeant in the Republic of Korea Army. Completed mandatory military service with full-time commitment, demonstrating leadership, discipline, and teamwork in a structured military environment.",
    },
    {
      link: "https://www.igc.or.kr/en/campus/library.do",
      image: "experience/igc_logo.png",
      alt: "IGC Logo",
      company: "Incheon Global Campus Library",
      date: "Feb 2023 - Jun 2024 · 1 yr 5 mos",
      position: "Student Library Assistant · Part-time",
      description: "Managed a digital database of over 60,000 book entries while assisting professors and students from 5 universities in accessing academic resources. Collaborated with librarians to organize campus-wide events that enhanced student engagement with library services.",
    },
    {
      link: "https://mediearth.net",
      image: "experience/mediearth_logo.png",
      alt: "Mediearth Logo",
      company: "MediEarth",
      date: "Aug 2023 - Dec 2023 · 5 mos",
      position: "Web Developer · Freelance",
      description: "Designed and implemented multilingual website features in Korean, English, and Thai using HTML, CSS, and JavaScript. Released an updated website version using version control to streamline deployment and ensured translation accuracy across all supported languages for a seamless user experience.",
    },
    {
      link: "https://sites.google.com/view/suny-bcl/home",
      image: "experience/bcl_logo.png",
      alt: "BCL Logo",
      company: "Brain-Inspired Computing Lab",
      date: "Jun 2024 - Jul 2025 · 1 yr 2 mos",
      position: "Undergraduate Research Assistant · Seasonal",
      description: "Conducted research in artificial intelligence with a focus on Spiking Neural Networks (SNN) for low-power, event-driven computer vision applications. Work involved experiments with YOLO architectures (YOLOv3, YOLOv8, Darknet), developing reference models, and adapting static image datasets for the Sigma Delta Neural Network (SDNN) to bridge conventional and neuromorphic approaches.\n\nProposed a novel learning algorithm that improved the training accuracy of the Sigma-Delta Spiking YOLO network by up to 4.08%, and co-authored a paper currently under review with IEEE Access.",
    },
    {
      link: "https://www.projectbasta.com/code2career",
      image: "experience/basta_logo.jpeg",
      alt: "BASTA Logo",
      company: "BASTA",
      date: "Oct 2025 - Dec 2025 · 3 mos",
      position: "Software Engineering Program · Apprenticeship",
      description: "Selected from a highly competitive applicant pool to engage in 10 weeks of pair programming and mentorship with a Google Software Engineer. Participated in regular weekly coding sessions to strengthen foundational coding skills, enhance problem-solving abilities, and grow as a Software Developer.",
    },
  ];

  const projectData = [
    {
      image: "project/lava_project.png",
      alt: "SDNN",
      title: "Advanced Training Algorithms in Sigma-Delta Spiking YOLO for Neuromorphic Hardware",
      type: "Research Paper · IEEE Access (Under Revision)",
      description: "Research on Energy-Efficient Object Detection using Spiking Neural Networks (SNNs)\nSubmitted for publication in IEEE Access (Currently under revision).\n\nProject Overview:\nConducted research to enhance the training and inference performance of Sigma-Delta spiking object detectors for deployment on low-power neuromorphic hardware. Addressed the challenge of non-differentiable spike functions in SNN training.\n\nKey Contributions:\n• Algorithm Development: Proposed a novel Epoch-Based Dynamic Surrogate Gradient Descent (ED-SGD) algorithm that dynamically modulates surrogate gradients to balance exploration and stabilization during training.\n• Optimization: Integrated SGDR (Cosine-Annealing with Warm Restarts) and MG-SGD (Multi-Gaussian surrogate gradients) to improve convergence behavior in spike-driven training.\n• Hardware Deployment: Successfully deployed the trained SDNN Tiny YOLOv3 model on Intel's Loihi 2 neuromorphic platform.\n\nPerformance Evaluation:\nValidated on BDD100K, Udacity Self-Driving, and SoccerNet datasets. The proposed ED-SGD method achieved the highest detection accuracy (mAP@0.5 of 18.53% on BDD100K), outperforming the baseline.\n\nEnergy Efficiency:\nDemonstrated that the Loihi 2 implementation consumes approximately 495x to 731x lower energy compared to conventional CNN-based YOLOv3 models running on NVIDIA RTX 4080 GPUs.",
    },
    {
      image: "project/startup.jpg",
      alt: "Startup Package Program",
      title: "IoT Smart Minibar MVP Development",
      type: "Government-Funded R&D Project · Ministry of SMEs and Startups",
      description: "Project Lead for the government-funded R&D project hosted by the Ministry of SMEs and Startups (MSS).\n\nProject Goal:\nTo develop a market-ready IoT Smart Minibar MVP and validate its commercial feasibility within 8 months.\n\nFunding Secured:\nSuccessfully led the proposal and pitch presentation, securing approximately $15,000 USD (KRW 20M) in grant funding.\n\nRole & Execution:\nManaged the entire project lifecycle from budget planning to prototype development and global field testing.\n\nKey Outcome:\nSuccessfully delivered the final prototype featuring real-time inventory tracking and QR payment modules, achieving pilot deployment in Thailand.",
    },
  ]

  return (
    <body>
      <section id = "profile">
        <div className="profile-picture">
          <img src = "profile_picture.jpeg" alt = "Profile" />
        </div>
        <div className="profile-text-links">
          <div className="profile-text">
            <p>Annyeonghaseyo, I'm</p>
            <p>Gilho</p>
            <p>Computer Scientist</p>
          </div>
          <div className="profile-links">
            <a href="https://github.com/gilhokim0924" target="_blank">
                <img src = "sns/github.svg" alt = "GitHub" className="profile-link-img"/>
            </a>
            <a href="https://www.linkedin.com/in/gilho-kim/" target="_blank">
                <img src = "sns/linkedin.svg" alt = "Linkedin" className="profile-link-img"/>
            </a>
            <a href="https://www.youtube.com/@g_il__h_o__" target="_blank">
                <img src = "sns/youtube.svg" alt = "Youtube" className="profile-link-img"/>
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
              Hello! I'm Gilho. I was born in Suwon, South Korea, but I have spent my childhood in Thailand. I have received a computer science degree from Stony Brook University with interests in Artificial Intelligence and Software Development. I love exploring new technologies related to A.I. and Software Development. Personally, I love to explore new places and countries for more variable experiences.
            </p>
          </div>

        </div>
        <div className="about-school-container">
          <a href="https://www.ics.ac.th" target="_blank" className="about-hs-container">
            <div className="about-school-logo"> 
              <img id="ics-logo" src="education/ics_logo.png" alt="ICS Logo" />
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
              <img id="sbu-logo" src="education/sbu_logo.png" alt="SBU Logo" />
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
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={20}
            breakpoints={{
              0: {slidesPerView: 1, centeredSlides: true, spaceBetween: 20},
              901: {slidesPerView: 3, centeredSlides: true, spaceBetween: 30},
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            preventClicks={false}
            preventClicksPropagation={false}
            allowTouchMove={true}
            slideToClickedSlide={false}
            observer={true}
            observeParents={true}

            modules={[Pagination, Scrollbar, A11y, Autoplay]}
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
                    <button
                      className="view-more-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/detail', {
                          state: {
                            image: data.image,
                            title: data.company,
                            subtitle: `${data.position} | ${data.date}`,
                            description: data.description,
                            returnSection: 'experience',
                            link: data.link // Pass the link to DetailPage
                          }
                        });
                      }}
                    >
                      View More
                    </button>
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
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={20}
            breakpoints={{
              0: {slidesPerView: 1, centeredSlides: true, spaceBetween: 20},
              901: {slidesPerView: 3, centeredSlides: true, spaceBetween: 30},
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            preventClicks={false}
            preventClicksPropagation={false}
            allowTouchMove={true}
            slideToClickedSlide={false}
            observer={true}
            observeParents={true}

            modules={[Pagination, Scrollbar, A11y, Autoplay]}
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
                    <button
                      className="view-more-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/detail', {
                          state: {
                            image: data.image,
                            title: data.title,
                            subtitle: data.type,
                            description: data.description,
                            returnSection: 'projects',
                            link: (data as any).link // Support links if they are added later
                          }
                        });
                      }}
                    >
                      View More
                    </button>
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
                <a href="gilhokim.png" download="gilhokim-contact.png">
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