import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/shoppingpetsLogin.png";
import projImg2 from "../assets/img/shoppingpetsHome.png";
import projImg3 from "../assets/img/shoppingpetsLogin2.png";
import mysowImg1 from "../assets/img/mysowingLogin.png";
import mysowImg2 from "../assets/img/mysowingHome.png";
import mysowImg3 from "../assets/img/mysowingWork.png";
import medeImg1 from "../assets/img/medeLanding.png";
import medeImg2 from "../assets/img/medeHome.png";
import medeImg3 from "../assets/img/medeAks.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const shoppingPets = [
    {
      title: "Registration Page",
      description: "with easy data request",
      imgUrl: projImg1,
    },
    {
      title: "Home Page",
      description: "where you can buy products",
      imgUrl: projImg2,
    },
    {
      title: "Login Page",
      description: "necesarry to acces the app",
      imgUrl: projImg3,
    }
  ];

  const mySowing = [
    {
      title: "Home Page",
      description: "where you can select wich plant to grow",
      imgUrl: mysowImg2,
    },
    {
      title: "Work Page",
      description: "this page tells you what to do to grow your plant",
      imgUrl: mysowImg3,
    },
    {
      title: "Delete or Continue",
      description: "you can stop the process or continue growing your plant",
      imgUrl: mysowImg1,
    }
  ];

  const medellinMovil = [
    {
      title: "Landing Page",
      description: "wich tells the users who we are",
      imgUrl: medeImg1,
    },
    {
      title: "Home Page",
      description: "where you can start with the levels",
      imgUrl: medeImg2,
    },
    {
      title: "Level Progress",
      description: "where you will learn and be asked testing your knowledge",
      imgUrl: medeImg3,
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>This are some of my student proyects that I have made while learning about the topics I like such as React and Game Development</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>Shopping Pets, a page where you can buy pets products made with GCP</p>
                      <Row>
                        {
                          shoppingPets.map((project, index) => {
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
                      <p>My Sowing, a page that heps you grow your own vegetable patch</p>
                      <Row>
                        {
                          mySowing.map((project, index) => {
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
                      <p>Medellín Movil, a page that helps you pass the driving test in Colombia</p>
                      <Row>
                        {
                          medellinMovil.map((project, index) => {
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
