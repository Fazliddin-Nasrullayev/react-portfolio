import React from 'react';
import { Col, Container, Row, Nav, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen';
const Projects = () => {
    const projects = [
        {
            title: 'Online-Magazine',
            description: 'Lorem ipsum dolor sit amet.',
            imgUrl: projImg1
        },
        {
            title: 'Online-Magazine',
            description: 'Lorem ipsum dolor sit amet.',
            imgUrl: projImg2
        },
        {
            title: 'Online-Magazine',
            description: 'Lorem ipsum dolor sit amet.',
            imgUrl: projImg3
        },
        {
            title: 'Online-Magazine',
            description: 'Lorem ipsum dolor sit amet.',
            imgUrl: projImg1
        },
        {
            title: 'Online-Magazine',
            description: 'Lorem ipsum dolor sit amet.',
            imgUrl: projImg2
        },
        {
            title: 'Online-Magazine',
            description: 'Lorem ipsum dolor sit amet.',
            imgUrl: projImg3
        }
    ]
    return (
        <>

        <section className='project' id='project'>
        <Container>
            <Row>
                <Col>
             <TrackVisibility >
                {({isVisible}) =>
                <div className={isVisible ? 'animate__animated animate__bounce' : ''}>
                <h2>Projects</h2>
                <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.</p>
                </div>}
                </TrackVisibility>
                <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                  <Nav.Item>
                    <Nav.Link eventKey='first' >Tab One</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      Tab Three
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey='first' >
                        <Row>
                            {
                                projects.map((project, index) =>(
                                    <ProjectCard key={index}
                                    {...project}
                                    />
                                ))
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey='second' className='text-center' >Loren Ipsum</Tab.Pane>
                    <Tab.Pane eventKey='third' className='text-center' >Lorem ipsum dolor sit.</Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
            <img src={colorSharp2} alt="imagess"
            className='background-image-right' />
        </section>
            
        </>
    );
};

export default Projects;