import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'



export class FeaturedProducts extends Component {
  render() {
    return(
      <>
        <section id='featured-products'>
            <Container className='text-center' fluid={true}>
                <div className='section-title text-center mt-5 mb-55'>
                    <h2>FEATURED PRODUCTS</h2>
                    <p>Some Of Our Exclusive Collection</p>
                </div>

                <Row>
                    <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Link to='/productdetails'>
                            <Card className='image-box card'>
                                <img 
                                src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/10/6262752/1.jpg?2027" 
                                alt="" className='center' />
                                <Card.Body>
                                    <p className='product-name-on-card'>XIAOMI Redmi A2+ 6.52" 2GB RAM/32GB ROM</p>
                                    <p className='product-price-on-card'>₦ 61,800</p>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className='image-box card'>
                            <img 
                            src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/Q/118566_1680009598.jpg" 
                            alt="" className='center' />
                            <Card.Body>
                                <p className='product-name-on-card'>XIAOMI Redmi A2+ 6.52" 2GB RAM/32GB ROM</p>
                                <p className='product-price-on-card'>₦ 61,800</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className='image-box card'>
                            <img 
                            src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/K/B/_1680341796.jpg" 
                            alt="" className='center' />
                            <Card.Body>
                                <p className='product-name-on-card'>XIAOMI Redmi A2+ 6.52" 2GB RAM/32GB ROM</p>
                                <p className='product-price-on-card'>₦ 61,800</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className='image-box card'>
                            <img 
                            src="https://www-konga-com-res.cloudinary.com/w_700,f_auto,fl_lossy,dpr_1.0,q_auto/media/catalog/product/I/H/_1699087676.png" 
                            alt="" className='center' />
                            <Card.Body>
                                <p className='product-name-on-card'>XIAOMI Redmi A2+ 6.52" 2GB RAM/32GB ROM</p>
                                <p className='product-price-on-card'>₦ 61,800</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className='image-box card'>
                            <img 
                            src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/C/118566_1677147512.jpg" 
                            alt="" className='center' />
                            <Card.Body>
                                <p className='product-name-on-card'>XIAOMI Redmi A2+ 6.52" 2GB RAM/32GB ROM</p>
                                <p className='product-price-on-card'>₦ 61,800</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className='image-box card'>
                            <img 
                            src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/11/2002752/1.jpg?9148" 
                            alt="" className='center' />
                            <Card.Body>
                                <p className='product-name-on-card'>XIAOMI Redmi A2+ 6.52" 2GB RAM/32GB ROM</p>
                                <p className='product-price-on-card'>₦ 61,800</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
        </section>
      </>
    )
  }
}

export default FeaturedProducts
