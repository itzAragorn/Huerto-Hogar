import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './Catalog.css';
import '../styles/catalog.css';

const Catalog = ({ user }) => {
  const [filters, setFilters] = useState({
    price: [],
    availability: [],
    brand: [],
    feature: []
  });

  const [sortOrder, setSortOrder] = useState('price-asc');

  const handleFilterChange = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const toggleFilter = (category) => {
    const element = document.getElementById(`${category}-options`);
    element.style.display = element.style.display === 'block' ? 'none' : 'block';
  };

  return (
    <div className="catalog-page">

      <Container fluid className="mt-5 pt-4">
        <Row>
          {/* Sidebar de filtros */}
          <Col md={3} className="filters-sidebar">
            <h2>Filtros</h2>

            <div className="filter-group">
              <Button variant="link" className="filter-toggle" onClick={() => toggleFilter('price')}>
                Precio
              </Button>
              <div id="price-options" className="filter-options">
                {['Bajo', 'Medio', 'Alto'].map(price => (
                  <Form.Check
                    key={price}
                    type="checkbox"
                    label={price}
                    checked={filters.price.includes(price.toLowerCase())}
                    onChange={() => handleFilterChange('price', price.toLowerCase())}
                  />
                ))}
              </div>
            </div>

            <div className="filter-group">
              <Button variant="link" className="filter-toggle" onClick={() => toggleFilter('availability')}>
                Disponibilidad
              </Button>
              <div id="availability-options" className="filter-options">
                <Form.Check
                  type="checkbox"
                  label="En stock"
                  checked={filters.availability.includes('in-stock')}
                  onChange={() => handleFilterChange('availability', 'in-stock')}
                />
                <Form.Check
                  type="checkbox"
                  label="Agotado"
                  checked={filters.availability.includes('out-of-stock')}
                  onChange={() => handleFilterChange('availability', 'out-of-stock')}
                />
              </div>
            </div>

            <div className="filter-group">
              <Button variant="link" className="filter-toggle" onClick={() => toggleFilter('brand')}>
                Marca
              </Button>
              <div id="brand-options" className="filter-options">
                {['Marca 1', 'Marca 2', 'Marca 3'].map(brand => (
                  <Form.Check
                    key={brand}
                    type="checkbox"
                    label={brand}
                    checked={filters.brand.includes(brand.toLowerCase().replace(' ', ''))}
                    onChange={() => handleFilterChange('brand', brand.toLowerCase().replace(' ', ''))}
                  />
                ))}
              </div>
            </div>

            <div className="filter-group">
              <Button variant="link" className="filter-toggle" onClick={() => toggleFilter('feature')}>
                Características
              </Button>
              <div id="feature-options" className="filter-options">
                {['Característica 1', 'Característica 2', 'Característica 3'].map(feature => (
                  <Form.Check
                    key={feature}
                    type="checkbox"
                    label={feature}
                    checked={filters.feature.includes(feature.toLowerCase().replace(' ', ''))}
                    onChange={() => handleFilterChange('feature', feature.toLowerCase().replace(' ', ''))}
                  />
                ))}
              </div>
            </div>
          </Col>

          {/* Sección de productos */}
          <Col md={9} className="products-section">
            <div className="products-count-and-sort d-flex justify-content-between align-items-center mb-3">
              <div className="products-count">
                0 artículos
              </div>
              <div className="sort-select">
                <Form.Label className="me-2 fw-bold" style={{color: '#2E8B57'}}>Ordenar por:</Form.Label>
                <Form.Select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  style={{padding: '5px', borderRadius: '4px', border: '1px solid #ccc'}}
                >
                  <option value="price-asc">Precio: menor a mayor</option>
                  <option value="price-desc">Precio: mayor a menor</option>
                  <option value="best-sellers">Más vendidos</option>
                </Form.Select>
              </div>
            </div>

            <Row className="products-grid">
              {Array.from({ length: 8 }, (_, i) => (
                <Col md={3} sm={6} key={i} className="mb-4">
                  <Card className="product-placeholder">
                    <Card.Body className="d-flex align-items-center justify-content-center">
                      <span>Producto {i + 1}</span>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Catalog;
