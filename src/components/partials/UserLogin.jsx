import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import Login from '../../assets/images/loginn.jpg';
import AppURL from '../../api/AppURL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordOnChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let loginBtn = document.getElementById('loginBtn');
    let LoginForm = document.getElementById('LoginForm');

    if (email.length === 0) {
      alert('Enter your email');
    } else if (password.length === 0) {
      alert('Enter your password');
    } else {
      let loginData = {
        email: email,
        password: password,
      };

      axios.post(AppURL.PostLogin, loginData)
        .then(function(response) {
          if (response.status === 200) {
            alert('Login Successful');
            loginBtn.innerHTML = "Welcome to Luxe-Lane";
            LoginForm.reset();
            navigate('/');
          } else {
            alert('Login was not successful');
            loginBtn.innerHTML = "Login";
          }
        })
        .catch(function(error) {
          alert(error.response?.data?.message || 'Something went wrong!');
          loginBtn.innerHTML = "Login";
        });
    }
  };

  return (
    <>
      <Container>
        <Row className='p-2'>
          <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
            <Row className='text-center'>
              <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                <Form onSubmit={handleSubmit} className='onboardForm' id='LoginForm'>
                  <h4 className='section-title-login'>LOGIN </h4>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label className='visually-hidden'>Email address</Form.Label>
                    <Form.Control 
                      name="email" 
                      type="email" 
                      placeholder="name@example.com" 
                      value={email}
                      onChange={emailOnChange}
                      required 
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label className='visually-hidden'>Password</Form.Label>
                    <Form.Control 
                      name="password" 
                      type="password" 
                      aria-describedby="passwordHelpBlock" 
                      value={password}
                      onChange={passwordOnChange}
                      required 
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                      Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </Form.Text>
                  </Form.Group>
                  
                  <Button type='submit' id="loginBtn" className="btn btn-block m-2 site-btn-login"> Next </Button>
                </Form>
              </Col>

              <Col className='p-0 m-0 Desktop' md={6} lg={6} sm={6} xs={6}>
                <img className='onboardBanner' src={Login} alt="Login" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserLogin;
