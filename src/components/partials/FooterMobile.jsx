import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Apple from '../../assets/images/appleplay.png'
import Google from '../../assets/images/googleplay.png'

export class FooterMobile extends Component {

  constructor() {
    super();
    this.state = {
      currentYear: new Date().getFullYear()
    };
  }

  render() {
    return (
      <>
        <div className='footerback m-0 mt-5 pt-3 shadow-sm'>
          <Container className='text-center'>
            
            <Row className='px-0 my-5'>

              <Col lg={3} md={3} sm={6} xs={12} className='p-2'>
                <h5 className='footer-menu-title'> OFFICE ADDRESS </h5>
                <p>125 Joy street Mowe Sheerwood <br></br> Email: suppport@luxe-lane.com </p>
                <h5 className='footer-menu-title'> SOCIAL LINK </h5>
                <a href="https://facebook.com"><i className="fab m-1 h4 fa-facebook"></i></a>
                <a href="https://instagram.com"><i className="fab m-1 h4 fa-instagram"></i></a>
                <a href="https://twitter.com"><i className="fab m-1 h4 fa-twitter"></i></a>
              </Col>

              <Col lg={3} md={3} sm={6} xs={12} className='p-2'>
                <h5 className='footer-menu-title'> DOWNLOAD APPS </h5>
                <a href="https://google.com"><img src={Google} alt="" style={{width:"200px"}} /></a><br></br>
                <a href="https://apple.com"><img src={Apple} alt="" className='mt-2' style={{width:"200px"}} /></a>
              </Col>
            </Row>
          </Container>

          <Container fluid={true} className='text-center text-light m-0 pt-3 pb-1 bg-dark'>
            <Row>
            <h6 className="">
                <strong>Copyright &copy; {this.state.currentYear} | All rights reserved</strong>
                {/* <script>document.write(new Date().getFullYear());</script>
                <script>document.querySelector('.footer-text').innerHTML += new Date().getFullYear();</script> */}            
              </h6>
            </Row>
          </Container>
        </div>
      </>
    )
  }
}

export default FooterMobile
