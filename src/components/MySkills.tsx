import { Col, Container, ProgressBar, Row } from "react-bootstrap";

function MySkills() {
    return (
      <div>
        <h2 className="text-center">Skills & Info</h2>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="text-sm font-bold mt-2">HTML</div>
                    <ProgressBar animated now={45} label="45%" variant="info"/>
                    <div className="text-sm font-bold mt-2">CSS</div>
                    <ProgressBar animated now={45} label="45%" variant="success"/>
                    <div className="text-sm font-bold mt-2">Javascript</div>
                    <ProgressBar animated now={45} label="45%" variant="warning"/>
                    <div className="text-sm font-bold mt-2">SCSS</div>
                    <ProgressBar animated now={45} label="45%"/>
                </div>

                <div className="col">
                    <Container className="mt-2">
                        <Row className="mt-2">
                            <Col md={3} className="font-bold uppercase">Age</Col>
                            <Col md={9}>22</Col>
                        </Row>
                        <Row className="mt-2">
                            <Col md={3} className="font-bold uppercase">address</Col>
                            <Col md={9}>196 Tiểu La</Col>
                        </Row>
                        <Row className="mt-2">
                            <Col md={3} className="font-bold uppercase">Blog</Col>
                            <Col md={9}>https://catbeo.com</Col>
                        </Row>
                        <Row className="mt-2">
                            <Col md={3} className="font-bold uppercase">E-mail</Col>
                            <Col md={9}>vucat12@gmail.com</Col>
                        </Row>
                        <Row className="mt-2">
                            <Col md={3} className="font-bold uppercase">Phone</Col>
                            <Col md={9}>0941447625</Col>
                        </Row>
                    </Container>
                </div>
            </div>        
        </div>
        

      </div>
    );
}
  
export default MySkills;