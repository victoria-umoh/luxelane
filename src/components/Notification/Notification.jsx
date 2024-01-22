import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap'



export class Notification extends Component {
    constructor(){
        super();
        this.state = {
            show:false,
        }
    }

    handleClose = () => {
        this.setState({show:false })
    };
    handleShow = () => {
        this.setState({show:true })
    };

  render() {
    return (
      <>
        <Container className="TopSection">
            <Row>
                <Col className='p-1' md={6} lg={6} sm={12} xs={12}>
                    <Card onClick={this.handleShow} className="notification-card">
                        <Card.Body>
                            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting</h6>
                            <p className='py-1 px-0 text-primary m-0'>
                                <i className="fa fa-bell"></i>  Date: 22/01/2024 | Status: Unread
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='p-1' md={6} lg={6} sm={12} xs={12}>
                    <Card  onClick={this.handleShow} className="notification-card">
                        <Card.Body>
                            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting</h6>
                            <p className='py-1 px-0 text-primary m-0'>
                                <i className="fa fa-bell"> </i> Date: 22/01/2024 | Status: Unread
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='p-1' md={6} lg={6} sm={12} xs={12}>
                    <Card  onClick={this.handleShow} className="notification-card">
                        <Card.Body>
                            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting</h6>
                            <p className='py-1 px-0 text-primary m-0'>
                                <i className="fa fa-bell"></i> Date: 22/01/2024 | Status: Unread
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='p-1' md={6} lg={6} sm={12} xs={12}>
                    <Card  onClick={this.handleShow} className="notification-card">
                        <Card.Body>
                            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting</h6>
                            <p className='py-1 px-0 text-primary m-0'>
                                <i className="fa fa-bell"></i> Date: 22/01/2024 | Status: Unread
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='p-1' md={6} lg={6} sm={12} xs={12}>
                    <Card  onClick={this.handleShow} className="notification-card">
                        <Card.Body>
                            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting</h6>
                            <p className='py-1 px-0 text-primary m-0'>
                                <i className="fa fa-bell"></i> Date: 22/01/2024 | Status: Unread
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='p-1' md={6} lg={6} sm={12} xs={12}>
                    <Card  onClick={this.handleShow} className="notification-card">
                        <Card.Body>
                            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting</h6>
                            <p className='py-1 px-0 text-primary m-0'>
                                <i className="fa fa-bell"></i> Date: 22/01/2024 | Status: Unread
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <h6> <i className="fa fa-bell"></i> Date: 11/05/2024</h6>
                </Modal.Header>

                <Modal.Body>
                    <h6>Woohoo, you are reading this text in a modal!</h6>
                    <p>Woohoo, you are reading this text in a modal!</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={this.handleClose}> Close </Button>
                </Modal.Footer>
            </Modal>

      </>
    )
  }
}

export default Notification

