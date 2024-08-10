import React from 'react';
import { Form, Container, Row, Col, Button, InputGroup } from 'react-bootstrap';
import Login from '../../assets/images/loginn.jpg';
import * as formik from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { useNavigate } from 'react-router-dom';

function Register() {
    const { Formik } = formik;
    const navigate = useNavigate();

    useEffect(() => {
        window.scroll(0, 0);
      }, []);
      

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required(),
        password_confirmation: yup.string().required(),
        terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    });

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post(AppURL.PostRegister, values);
            console.log('Success:', response.data);
            alert('Registration successful');
            navigate('/login');
        } catch (error) {
            console.error('Error:', error);
            alert('Registration failed!');
        }
    };

    return (
        <Formik
            validationSchema={schema}
            onSubmit={handleSubmit}
            initialValues={{
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                terms: false,
            }}
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Container>
                    <Row className='p-2'>
                        <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
                            <Row className='text-center'>
                                <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                                    <Form noValidate onSubmit={handleSubmit} className='onboardForm'>
                                        <h4 className='section-title-login'> REGISTER </h4>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="validationFormikName">
                                                <Form.Label style={{ visibility: 'hidden' }}>Name</Form.Label>
                                                <InputGroup hasValidation>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Name"
                                                        name="name"
                                                        value={values.name}
                                                        onChange={handleChange}
                                                        isInvalid={!!errors.name}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.name}
                                                    </Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="12" controlId="validationFormikEmail" className='mb-3'>
                                                <Form.Label className='visually-hidden'>Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Email"
                                                    name="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.email}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.email}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="12" controlId="validationFormikPassword" className='mb-3'>
                                                <Form.Label className='visually-hidden'>Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Password"
                                                    name="password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.password}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.password}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="12" controlId="validationFormikPasswordConfirmation" className='mb-3'>
                                                <Form.Label className='visually-hidden'>Confirm Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    name="password_confirmation"
                                                    value={values.password_confirmation}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.password_confirmation}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.password_confirmation}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        <Form.Group className="mb-3">
                                            <Form.Check
                                                required
                                                name="terms"
                                                label="Agree to terms and conditions"
                                                onChange={handleChange}
                                                isInvalid={!!errors.terms}
                                                feedback={errors.terms}
                                                feedbackType="invalid"
                                                id="validationFormik0"
                                            />
                                        </Form.Group>
                                        <Button type="submit">Submit form</Button>
                                    </Form>
                                </Col>
                                <Col className='p-0 m-0 Desktop' md={6} lg={6} sm={6} xs={6}>
                                    <img className='onboardBanner' src={Login} alt="Login" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            )}
        </Formik>
    );
}

export default Register;
