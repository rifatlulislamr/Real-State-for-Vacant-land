import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">

                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1>Quick Connect</h1>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="serviceDescription"> Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name"/>

                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="serviceDescription"> Email Address</Form.Label>
                                    <Form.Control type="text" placeholder="name@example.com"/>

                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="serviceDescription"> Message</Form.Label>
                                    <Form.Control as="textarea" rows="3" type="text"/>

                                </Form.Group>


                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>


                        </Col>


                        <Col lg={6} md={6} sm={12}>
                            <h1>Discuss Now</h1>
                            <p className="serviceDescription">Khondakar Para, 7No Ward, Chakaria, Cox's Bazar,
                                Bangladesh</p>
                            <p className="serviceDescription"><FontAwesomeIcon
                                icon={faEnvelope}/> Riadchy37@gmail.com</p>
                            <p className="serviceDescription"><FontAwesomeIcon
                                icon={faPhone}/> +8801876980021</p>

                        </Col>


                    </Row>

                </Container>

            </Fragment>
        )
            ;
    }
}

export default ContactSection;