import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Blog.css';
import '../styles/blog.css';

const Blog = ({ user }) => {
  const posts = [
    {
      author: 'María González',
      date: '5 de septiembre, 2025',
      content: 'Siempre quise tener un huerto en casa, pero no sabía por dónde empezar. Gracias a Huerto Hogar, ahora tengo tomates y lechugas frescas cada semana. ¡Una experiencia increíble!'
    },
    {
      author: 'Carlos Ramírez',
      date: '3 de septiembre, 2025',
      content: 'Me animé a probar semillas orgánicas y fue un éxito total. El soporte y los consejos que ofrece Huerto Hogar hicieron que mi jardín urbano floreciera como nunca.'
    },
    {
      author: 'Laura Pérez',
      date: '1 de septiembre, 2025',
      content: 'Recomiendo Huerto Hogar a todos los que quieren empezar en la jardinería. Sus productos son de calidad y fáciles de usar. ¡Ahora toda mi familia disfruta de frutas y verduras frescas!'
    }
  ];

  return (
    <div className="blog-page">

      <Container className="mt-5 pt-4">
        <h1 className="text-center mb-5">Experiencias de nuestros usuarios</h1>

        <Row>
          {posts.map((post, index) => (
            <Col md={12} key={index} className="mb-4">
              <Card className="blog-post">
                <Card.Body>
                  <div className="post-header mb-3">
                    <h2 className="mb-1">{post.author}</h2>
                    <span className="post-date text-muted">{post.date}</span>
                  </div>
                  <p className="post-content">{post.content}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
