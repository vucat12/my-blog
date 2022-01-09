import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Github, Instagram, Linkedin } from 'react-bootstrap-icons';

function Footer() {
  return (
    <div className="footer md:p-12 py-12">
      <div className="footer-menu md:w-96 m-auto">
      <Container>
        <Row xs="auto" className="justify-center">
            <Col>About</Col>
            <Col>Blog</Col>
            <Col>Jobs</Col>
            <Col>Press</Col>
        </Row>
      </Container>
      </div>
      <div className="footer-contact pt-6 w-96 m-auto ">
        <Container>
          <Row  xs="auto" className="justify-center">
            <Col><Facebook className="text-2xl"/></Col>
            <Col><Github className="text-2xl"/></Col>
            <Col><Linkedin className="text-2xl"/></Col>
            <Col><Instagram className="text-2xl"/></Col>
          </Row>
        </Container>
        
      </div>
      <div className="footer-info pt-6">
        Happy New Year 2022.
      </div>
    </div>
  );
}

export default Footer;
