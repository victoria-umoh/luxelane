import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Login from '../../assets/images/loginn.jpg'

export class UserLogin extends Component {

  componentDidMount(){
    window.scroll(0,0)
  }
  
  render() {
    return (
      <>
        <Container>
            <Row className='p-2'>
                <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>

                    <Row className='text-center'>
                        <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                            <form action="" className='onboardForm'>
                                <h4 className='section-title-login'> USER SIGN-IN </h4>
                                <h6 className='section-sub-title'> Please Enter Your Email</h6>
                                <input type="text" className='form-control' placeholder='Enter Your Email' />
                                <Button className="btn btn-block m-2 site-btn-login"> Next </Button>
                            </form>
                        </Col>

                        <Col className='p-0 m-0 Desktop' md={6} lg={6} sm={6} xs={6}>
                            <img className='onboardBanner' src={Login} alt="user login" />
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export default UserLogin
