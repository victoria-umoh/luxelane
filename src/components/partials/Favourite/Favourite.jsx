import React, { Component } from 'react'
import { Container, Row, Col, Card, Button} from 'react-bootstrap'

export class Favourite extends Component {
  render() {
    return (
        <>
        <Container className='text-center mt-5 pt-5' fluid={true}>
                <div className='section-title text-center mt-5'>
                    <h2>FAVOURITE PRODUCTS</h2>
                    <p>Some Of Our Exclusive Collection</p>
                </div>
                
            <Row>
                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className='image-box card'>
                        <img 
                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/095307/1.jpg?9004" 
                            alt="" className='center' />
                        <Card.Body>
                            <p className='product-name-on-card'>XIAOMI Redmi A2+ 6.52" 2GB RAM/32GB ROM</p>
                            <p className='product-price-on-card'>₦ 61,800</p>
                            <Button className='btn btn-sm'> <i className="fa fa-trash-alt"></i> Remove</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className='image-box card'>
                        <img 
                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/849377/1.jpg?9774" 
                            alt="" className='center' />
                        <Card.Body>
                            <p className='product-name-on-card'>XIAOMI Redmi A2+ 6.52" 2GB RAM/32GB ROM</p>
                            <p className='product-price-on-card'>₦ 61,800</p>
                            <Button className='btn btn-sm'> <i className="fa fa-trash-alt"></i> Remove</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className='image-box card'>
                        <img 
                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/0042391/1.jpg?2661" 
                            alt="" className='center' />
                        <Card.Body>
                            <p className='product-name-on-card'>XIAOMI Redmi A2+ 6.52" 2GB RAM/32GB ROM</p>
                            <p className='product-price-on-card'>₦ 61,800</p>
                            <Button className='btn btn-sm'> <i className="fa fa-trash-alt"></i> Remove</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className='image-box card'>
                        <img 
                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/0133871/1.jpg?9678" 
                            alt="" className='center' />
                        <Card.Body>
                            <p className='product-name-on-card'>XIAOMI Redmi A2+ 6.52" 2GB RAM/32GB ROM</p>
                            <p className='product-price-on-card'>₦ 61,800</p>
                            <Button className='btn btn-sm'> <i className="fa fa-trash-alt"></i> Remove</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export default Favourite
