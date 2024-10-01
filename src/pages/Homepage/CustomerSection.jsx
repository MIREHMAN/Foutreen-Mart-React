import { useState } from 'react';
import './CustomerSection.css'
import { Button, Form, FloatingLabel, FormControl, ButtonGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CustomerSection() {
  const [currentForm, setCurrentForm] = useState(null);

  const handleFormChange = (formType) => {
    setCurrentForm(formType);
  };

  return (
    <Container fluid className="mt-5 ">
      <Row>
        <Col xs={12}>
          <ButtonGroup className="w-50 mb-3">
            <Button onClick={() => handleFormChange('productVerifier')}>Product Verification</Button>
            <Button onClick={() => handleFormChange('trackOrder')}>Track Order</Button>
            <Button onClick={() => handleFormChange('userSuggestion')}>User Suggestion</Button>
            <Button onClick={() => handleFormChange('couponCheck')}>Coupon Check</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        {currentForm === 'productVerifier' && <ProductVerifierForm />}
        {currentForm === 'trackOrder' && <TrackOrderForm />}
        {currentForm === 'userSuggestion' && <UserSuggestionForm />}
        {currentForm === 'couponCheck' && <CouponCheckForm />}
      </Row>
    </Container>
  );
}

const ProductVerifierForm = () => {
  return (
    <Form>
      <h2>Enter the Product ID to Verify</h2>
      <FloatingLabel label="Product ID" className="mb-3">
        <FormControl type="text" placeholder="Enter Product ID" style={{ width: '50%' }} />
      </FloatingLabel>
      <Button variant="primary" type="submit">Verify Product</Button>
    </Form>
  );
};

const TrackOrderForm = () => {
  return (
    <Form>
      <h2>Enter the Order Number To Track</h2>
      <FloatingLabel label="Order Number" className="mb-3">
        <FormControl type="text" placeholder="Enter Order Number" style={{ width: '50%' }} />
      </FloatingLabel>
      <Button variant="primary" type="submit">Track Order</Button>
    </Form>
  );
};

const UserSuggestionForm = () => {
  return (
    <Form>
      <h2>Enter Your Valuable Suggestion</h2>
      <FloatingLabel label="Suggestion" className="mb-3">
        <FormControl as="textarea" placeholder="Enter your suggestion" style={{ width: '50%' }} />
      </FloatingLabel>
      <Button variant="primary" type="submit">Submit Suggestion</Button>
    </Form>
  );
};

const CouponCheckForm = () => {
  return (
    <Form>
      <h2>Enter the Email Id to Check Available Coupons</h2>
      <FloatingLabel label="Email ID" className="mb-3">
        <FormControl type="email" placeholder="Enter Email ID" style={{ width: '50%' }} />
      </FloatingLabel>
      <Button variant="primary" type="submit">Check Coupons</Button>
    </Form>
  );
};

export default CustomerSection;