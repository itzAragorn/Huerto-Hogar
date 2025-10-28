import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import '../styles/nosotros.css';

const About = ({ user }) => {
  return (
    <div className="about-page">

      <Container className="mt-5 pt-4">
        <section className="historia mb-5">
          <h1 className="text-center mb-4">Nuestra Historia</h1>
          <p className="lead text-center">
            Huerto Hogar nació en 2020 con el sueño de acercar la agricultura urbana y
            los productos frescos directamente a las familias. Nuestro objetivo ha sido siempre
            fomentar la alimentación saludable y el cuidado del medio ambiente a través de
            semillas, herramientas y productos naturales de alta calidad.
          </p>
        </section>

        <section className="sucursales mb-5">
          <h2 className="text-center mb-4">Nuestras Sucursales</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <ul className="list-unstyled">
                <li className="mb-3"><strong>Santiago Centro:</strong> Av. Libertador Bernardo O'Higgins 1234</li>
                <li className="mb-3"><strong>Providencia:</strong> Av. Nueva Providencia 567</li>
                <li className="mb-3"><strong>Viña del Mar:</strong> Av. Libertad 890</li>
              </ul>
            </Col>
          </Row>
        </section>

        <section className="mapa">
          <h2 className="text-center mb-4">Encuéntranos en el mapa</h2>
          <Row className="justify-content-center">
            <Col md={10}>
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1g-6hXZy1U5fKZsI-QkAa6i0oP8nDqfA&ehbc=2E312F"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Mapa de sucursales"
              ></iframe>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default About;
