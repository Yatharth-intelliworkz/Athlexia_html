import { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

type Props = {
  show: boolean;
  onClose: () => void;
  productId: string;
  productName: string;
  company: string;
  city: string;
  area: string;
};

export default function ContactSupplierModal({
  show,
  onClose,
  productId,
  productName,
  company,
  city,
  area,
}: Readonly<Props>) {   // 👈 mark props as read-only
  const [form, setForm] = useState({
    name: '',
    phone: '',
    quantity: '',
    message: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact supplier form:', {
      productId,
      productName,
      company,
      city,
      area,
      ...form,
    });
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Contact Supplier</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div style={{ marginBottom: 12, fontSize: 14 }}>
          <strong>{productName}</strong> — {company} ({city} - {area})
        </div>

        <Form onSubmit={onSubmit}>
          <Row className="g-2">
            <Col sm={6}>
              <Form.Group controlId="contactName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" value={form.name} onChange={onChange} required />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group controlId="contactPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control name="phone" value={form.phone} onChange={onChange} required />
              </Form.Group>
            </Col>
          </Row>

          <Row className="g-2 mt-2">
            <Col sm={6}>
              <Form.Group controlId="contactQty">
                <Form.Label>Quantity</Form.Label>
                <Form.Control name="quantity" value={form.quantity} onChange={onChange} />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group controlId="contactMsg">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={1}
                  value={form.message}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="mt-3 d-flex justify-content-end gap-2">
            <Button variant="secondary" onClick={onClose}>Cancel</Button>
            <Button variant="primary" type="submit">Send</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
