import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

function MyResume() {
  useEffect(() => {
    
  }, [])

  return (
    <Container className="mx-0">
        <Row>
            <Col md={3} className="relative background-resume min-height-70vh">
                <div className="absolute top-1/2 left-1/2 transform-translate-50">
                    <div className="my-avatar">
                        aaaaaa
                    </div>
                </div>
            </Col>
            <Col md={9}>aaaaa</Col>
        </Row>
    </Container>
  );
}

export default MyResume;
