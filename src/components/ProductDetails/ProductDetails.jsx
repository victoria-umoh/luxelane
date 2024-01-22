import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Product1 from '../../assets/images/shoe1.jpg'
import Product2 from '../../assets/images/shoe2.jpg'
import Product3 from '../../assets/images/shoe3.jpg'
import Product4 from '../../assets/images/shoe5.jpg'
import Product5 from '../../assets/images/shoe7.jpg'

export class ProductDetails extends Component {
  render() {
    return (
      <>
        <Container fluid={true} className="BetweenTwoSection">
            <Row className="p-2">
                <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                    <Row>
                        <Col className='p-3' md={6} lg={6} sm={12} xs={12}>
                            <img className='w-100' src={Product1} alt="" />
                            <Container className='my-3'>
                                <Row>
                                    <Col className='p-0 m-0' md={3} lg={3} sm={3} xs={3}>
                                        <img className='w-100' src={Product2} alt="" />
                                    </Col>
                                    <Col className='p-0 m-0' md={3} lg={3} sm={3} xs={3}>
                                        <img className='w-100' src={Product3} alt="" />
                                    </Col>
                                    <Col className='p-0 m-0' md={3} lg={3} sm={3} xs={3}>
                                        <img className='w-100' src={Product4} alt="" />
                                    </Col>
                                    <Col className='p-0 m-0' md={3} lg={3} sm={3} xs={3}>
                                        <img className='w-100' src={Product5} alt="" />
                                    </Col>

                                    <Col className='mt-5'>
                                        <h3>Details</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                                            sheets containing Lorem Ipsum passages,and more recently with desktop publishing software 
                                            like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col className='p-3'>
                            <form action="">
                                <h3 className='Product-Name'>NIKE TUF A15 FA5076 RYZEN</h3>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
                                <div className="d-flex mb-3">
                                    <div className="Product-price-card">
                                        Regular Price 200
                                    </div>
                                    <div className="Product-price-card">
                                    50% Discount
                                    </div>
                                    <div className="Product-price-card">
                                        New Price 100
                                    </div>
                                </div>

                                <div className="">
                                    <h6>Choose Color</h6>
                                    <input type="radio" name="product-color" className='me-2'  />
                                    <label htmlFor="" className='me-2'> Black </label>
                                    <input type="radio" name="product-color" className='me-2'  />
                                    <label htmlFor="" className='me-2'> Green </label>
                                    <input type="radio" name="product-color" className='me-2'  />
                                    <label htmlFor="" className='me-2'> Red </label>
                                </div>

                                <div className="mt-2">
                                    <h6>Choose Size</h6>
                                    <input type="radio" name="product-size" className='me-2 '  />
                                    <label htmlFor="" className='me-2'> X </label>
                                    <input type="radio" name="product-size" className='me-2'  />
                                    <label htmlFor="" className='me-2'> XX </label>
                                    <input type="radio" name="product-size" className='me-2'  />
                                    <label htmlFor="" className='me-2'> XXL </label>
                                </div>

                                <div className="mt-2">
                                    <h6>Quantity</h6>
                                    <div className="Product-qty-card text-center">
                                        3
                                    </div>
                                </div>

                                <div className="d-flex mb-3">
                                    <button className="Product-price-card bg-black text-white"> 
                                        <i className="fa fa-shopping-cart"></i>&nbsp;
                                        Add to Cart
                                    </button>
                                    <button className="Product-price-card bg-primary text-white">
                                        <i className="fa fa-shopping-cart"></i>&nbsp;
                                    Order Now
                                    </button>
                                    <button className="Product-price-card bg-primary text-white">
                                    <i className="fa fa-heart"></i>&nbsp;
                                        Favourite
                                    </button>
                                </div>

                                <div className="">
                                    <h3>Reviews</h3>
                                    <p className='Review-Title pb-0 mb-0'>Victoria Umoh &nbsp;
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </p>
                                    <p className='pt-0 mt-0'>
                                    On the other hand, we denounce with righteous indignation and 
                                    dislike men who are so beguiled and demoralized by the charms of pleasure of the moment,
                                    </p>
                                    <p className='Review-Title pb-0 mb-0'>Victoria Umoh &nbsp;
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </p>
                                    <p className='pt-0 mt-0'>
                                    On the other hand, we denounce with righteous indignation and 
                                    dislike men who are so beguiled and demoralized by the charms of pleasure of the moment,
                                    </p>
                                    <p className='Review-Title pb-0 mb-0'>Victoria Umoh &nbsp;
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </p>
                                    <p className='pt-0 mt-0'>
                                    On the other hand, we denounce with righteous indignation and 
                                    dislike men who are so beguiled and demoralized by the charms of pleasure of the moment,
                                    </p>

                                </div>
                            </form>
                        </Col>
                    </Row>
                </Col>

                
            </Row>
        </Container>
      </>
    )
  }
}

export default ProductDetails
