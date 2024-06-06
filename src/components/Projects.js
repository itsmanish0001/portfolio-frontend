import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "../App.css"


import photo1 from "../project/1_photo.png";
import video1 from "../project/1_recording.mp4";
import photo2 from "../project/2_photo.png";
import video2 from "../project/2_recording.mp4";
import photo3 from "../project/3_photo.png";
import video3 from "../project/3_recording.mp4";
import photo4 from "../project/4_photo.png";
import video4 from "../project/4_recording.mp4";
import photo5 from "../project/5_photo.png";
import video5 from "../project/5_recording.mp4";
import photo6 from "../project/6_photo.png";
import video6 from "../project/6_recording.mp4";


import photo7 from "../project/7_photo.png";
import video7 from "../project/7_recording.mp4";
import photo8 from "../project/8_photo.png";
import video8 from "../project/8_recording.mp4";

import photo9 from "../project/9_photo.png";
import video9 from "../project/9_recording.mp4";
import photo10 from "../project/10_photo.png";
import video10 from "../project/10_recording.mp4";








export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Login and Sign up",
      imgUrl: photo1,
      to_navigate: video1
    },
    {
      title: "Business Startup",
      description: "User Interface",
      imgUrl: photo2,
      to_navigate: video2
    },
    {
      title: "Business Startup",
      description: "Realtime Chat",
      imgUrl: photo3,
      to_navigate: video3
    },
    {
      title: "Business Startup",
      description: "Group Functionalities",
      imgUrl: photo4,
      to_navigate: video4
    },
    {
      title: "Business Startup",
      description: "Realtime-msg Notifications",
      imgUrl: photo5,
      to_navigate: video5
    },
    {
      title: "Business Startup",
      description: "Sending photos, videos, files etc",
      imgUrl: photo6,
      to_navigate: video6
    },
  ];

  const project2 = [
    {
      description:"Creating Room",
      imgUrl:photo7,
      to_navigate:video7,
    },
    {
      description:"Realtime Code Sync",
      imgUrl:photo8,
      to_navigate:video8,
    },
  ]

  const project3 = [
    {
      description:"Video Calling Application",
      imgUrl:photo9,
      to_navigate:video9,
    },
    {
      description:"iNotebook/Todo application",
      imgUrl:photo10,
      to_navigate:video10,
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Click on any project screenshot to view a demo video of the project features.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Chat-App</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Code-Sync</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Practice Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          <div className="p_link">
                            <a href="https://chat-app-frontend-rho-five.vercel.app/" target="_blank" rel="noopener noreferrer">Click here to View Live Demo</a>
                          </div>
                          <div className="p_link">
                            <a href="https://github.com/itsmanish0001/ChatApp-frontend" target="_blank" rel="noopener noreferrer">Github Repository </a>
                          </div>

                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          <div className="p_link">
                            <a href="https://code-sync-frontend-six.vercel.app/" target="_blank" rel="noopener noreferrer">Click here to View Live Demo</a>
                          </div>
                          <div className="p_link">
                            <a href="https://github.com/itsmanish0001/code-sync-frontend" target="_blank" rel="noopener noreferrer">Github Repository </a>
                          </div>

                          {
                            project2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          <div className="p_link">
                            <a href="https://videocalling-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">Click here to View Live Demo of VideoCalling application</a>
                            <a href="https://github.com/itsmanish0001/videocalling-frontend" target="_blank" rel="noopener noreferrer">Github Repository of VideoCalling application </a>
                          </div>
                          <div className="p_link">
                            <a href="https://i-notebook-frontend-eight.vercel.app/" target="_blank" rel="noopener noreferrer">Click here to View Live Demo of Todo Application Github Repository of Todo Application</a>
                            <a href="https://github.com/itsmanish0001/iNotebook-frontend.git" target="_blank" rel="noopener noreferrer">Github Repository of Todo Application </a>
                          </div>

                          {
                            project3.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
