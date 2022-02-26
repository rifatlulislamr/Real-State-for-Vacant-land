import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img
                                src="https://image.shutterstock.com/image-photo/pink-hyacinth-flowerbed-grass-background-600w-545526346.jpg"/>

                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName">Education</h2>
                            <p className="serviceDescription">There are many variations of passages of Lorem Ipsum
                                available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable.</p>
                            <ul>
                                <li className="serviceDescription"> There are many variations of passages of Lorem
                                    Ipsum
                                </li>
                                <li className="serviceDescription"> There are many variations of passages of Lorem
                                    Ipsum
                                </li>
                                <li className="serviceDescription"> There are many variations of passages of Lorem
                                    Ipsum
                                </li>
                                <li className="serviceDescription"> There are many variations of passages of Lorem
                                    Ipsum
                                </li>
                                <li className="serviceDescription"> There are many variations of passages of Lorem
                                    Ipsum
                                </li>
                                <li className="serviceDescription"> There are many variations of passages of Lorem
                                    Ipsum
                                </li>
                                <li className="serviceDescription"> There are many variations of passages of Lorem
                                    Ipsum
                                </li>
                                <li className="serviceDescription"> There are many variations of passages of Lorem
                                    Ipsum
                                </li>


                            </ul>
                            <Button variant="primary">More info</Button>
                        </Col>


                    </Row>


                </Container>


            </Fragment>
        );
    }
}

export default ProjectDetails;