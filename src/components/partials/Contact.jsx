import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'


export class Contact extends Component {
  render() {
    return (
        <>
        <Container>
            <Row className='p-2'>
                <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>

                    <Row className='text-center'>
                        <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                            <form action="" className='onboardForm'>
                                <h4 className='section-title-login'>CONTACT US</h4>
                                <h6 className='section-sub-title'> Please Contact Us </h6>
                                <input type="text" className='form-control m-2' placeholder='Enter Mobile Number' />
                                <input type="email" className='form-control m-2' placeholder='Enter Your Email' />
                                <input type="text" className='form-control m-2' placeholder='Enter Your Message' />
                                <Button className="btn btn-block m-2 site-btn-login"> Submit </Button>
                            </form>
                        </Col>

                        <Col className='p-0 m-0 Desktop' md={6} lg={6} sm={6} xs={6}>
                            <br></br><br></br>
                        <p className='section-title-contact'>125 Joy street Mowe Sheerwood </p>
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96712.53415798995!2d-74.16095541406249!3d40.75615866755062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral%20Park!5e0!3m2!1sen!2sng!4v1704317861143!5m2!1sen!2sng" 
                        width="550" height="450" styles="border:0;" 
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export default Contact
