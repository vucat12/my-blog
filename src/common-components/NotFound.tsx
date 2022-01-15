import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='relative h-100 min-height-70vh'>
      <div className='absolute top-1/2 left-1/2 transform-translate-50 text-center top-1/2'>
        <h1 className="font-bold number-404">
          404
        </h1>
        <h2 className='text-ooops mb-4'>
          <em>Oops... <br/>
          page not found</em>
        </h2>
        <Container>
          <Row xs="auto" className="justify-center">
            <Col className="text-a-link font-bold text-xl underline" onClick={() => navigate('/my-blog')}>My Blog</Col>
            <Col className="text-a-link font-bold text-xl underline" onClick={() => navigate('/my-resume')}>My CV</Col>
          </Row>
        </Container>
      </div>
    </div>
    
  );
}

export default NotFound;
