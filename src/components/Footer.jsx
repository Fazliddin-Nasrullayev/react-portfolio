import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MailChimpForm from './MailChimpForm';
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <Container>
                    <Row className='align-items-center' >
                        <MailChimpForm />
                        <Col sm={6}>
                            <img src={logo} alt="logo images" />
                        </Col>
                        <Col sm={6} className='text-center text-sm-end' >
                            <div className="social-icon">
                                <a href='home' >
                                    <img src={navIcon1} alt="zxc" />
                                </a>
                                 <a href='home' >
                                    <img src={navIcon2} alt="zxc" />
                                </a>
                                 <a href='home' >
                                    <img src={navIcon3} alt="zxc" />
                                </a>
                            </div>
                            <p>CopyRight 2022. All Right Reserved</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;