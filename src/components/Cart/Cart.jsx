import React, { Component } from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import Product1 from '../../assets/images/shoe1.jpg'
export class Cart extends Component {
  render() {
    return (
        <>
            <Container>
            <div className='section-title text-center mt-5 mb-55'>
                    <h2>PRODUCT CART LIST</h2>
                    <p>Some Of Our Exclusive Collection</p>
                </div>

                <Row>
                    <Col className='p-1' lg={12} md={12} sm={12} xs={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col md={3} lg={3} sm={6} xs={6}>
                                        <img className='cart-product-img' src={Product1} alt="product" />
                                    </Col>

                                    <Col md={6} lg={6} sm={6} xs={6}>
                                        <h5 className='product-name'>ASUS TUF A15 FA506IU RYZEN</h5>
                                        <h6>Quantity = 05 x 100 = 5000$</h6>
                                    </Col>

                                    <Col md={3} lg={3} sm={12} xs={12}>
                                        <input type="number" placeholder="2" className='form-control text-center' />
                                        <Button className="btn btn-block w-100 mt-3 site-btn"> <i className="fa fa-trash-alt"></i> Remove </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className='p-1' lg={12} md={12} sm={12} xs={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col md={3} lg={3} sm={6} xs={6}>
                                        <img className='cart-product-img' src={Product1} alt="product" />
                                    </Col>

                                    <Col md={6} lg={6} sm={6} xs={6}>
                                        <h5 className='product-name'>ASUS TUF A15 FA506IU RYZEN</h5>
                                        <h6>Quantity = 05 x 100 = 5000$</h6>
                                    </Col>

                                    <Col md={3} lg={3} sm={12} xs={12}>
                                        <input type="number" placeholder="2" className='form-control text-center' />
                                        <Button className="btn btn-block w-100 mt-3 site-btn"> <i className="fa fa-trash-alt"></i> Remove </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className='p-1' lg={12} md={12} sm={12} xs={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col md={3} lg={3} sm={6} xs={6}>
                                        <img className='cart-product-img' src={Product1} alt="product" />
                                    </Col>

                                    <Col md={6} lg={6} sm={6} xs={6}>
                                        <h5 className='product-name'>ASUS TUF A15 FA506IU RYZEN</h5>
                                        <h6>Quantity = 05 x 100 = 5000$</h6>
                                    </Col>

                                    <Col md={3} lg={3} sm={12} xs={12}>
                                        <input type="number" placeholder="2" className='form-control text-center' />
                                        <Button className="btn btn-block w-100 mt-3 site-btn"> <i className="fa fa-trash-alt"></i> Remove </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className='p-1' lg={12} md={12} sm={12} xs={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col md={3} lg={3} sm={6} xs={6}>
                                        <img className='cart-product-img' src={Product1} alt="product" />
                                    </Col>

                                    <Col md={6} lg={6} sm={6} xs={6}>
                                        <h5 className='product-name'>ASUS TUF A15 FA506IU RYZEN</h5>
                                        <h6>Quantity = 05 x 100 = 5000$</h6>
                                    </Col>

                                    <Col md={3} lg={3} sm={12} xs={12}>
                                        <input type="number" placeholder="2" className='form-control text-center' />
                                        <Button className="btn btn-block w-100 mt-3 site-btn"> <i className="fa fa-trash-alt"></i> Remove </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* CHECKOUT BUTTON */}
                    <Col className='p-1' lg={12} md={12} sm={12} xs={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col md={6} lg={6} sm={6} xs={6}>
                                        <h5>Total Item = 05</h5>
                                        <h5>Total Price = 5000$</h5>
                                        <Button className="btn btn-block w-100 mt-3 site-btn"> <i className="fa fa-shopping-cart"></i> Checkout </Button>

                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
        </>
    )
  }
}

export default Cart
