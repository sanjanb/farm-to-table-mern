import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: '#343a40', color: '#fff', padding: '20px 0' }}
    >
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <h5 style={{ marginBottom: '0.5rem', fontWeight: 'lighter' }}>
              Farm-To-Table &copy; {currentYear}
            </h5>
            <p style={{ fontSize: '0.9rem', marginBottom: '0' }}>
              Website crafted with 💚 by{' '}
              <span style={{ fontWeight: 'bold' }}>Sanjan B M</span>
            </p>
            <p style={{ fontSize: '0.9rem', marginBottom: '0' }}>
              Contact: {''}
              <span style={{ fontWeight: '-moz-initial' }}>
                sanjanacharaya1234@gmail.com
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
