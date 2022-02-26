import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Courses extends Component {
    render() {
        return (
            <Fragment>

                <Container className="text-center">
                    <h1 className="serviceMainTitle">FEATURED PROPERTIES</h1>
                    <Row>

                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImage"
                                         src="https://image.shutterstock.com/image-photo/image-happy-brunette-man-wearing-600w-1489874846.jpg"/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start courseTitle">Web Development</h5>
                                    <p className="text-start courseDes">I build native and cross platform mobile app for
                                        your
                                        business app for your
                                        business</p>
                                    <Link className="courseDetails" to="/courseDetails">Details</Link>

                                </Col>

                            </Row>

                        </Col>

                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImage"
                                         src="https://image.shutterstock.com/image-photo/portrait-mature-businessman-wearing-glasses-600w-738242395.jpg"/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start courseTitle">Web Development</h5>
                                    <p className="text-start courseDes">I build native and cross platform mobile app for
                                        your
                                        business app for your
                                        business</p>
                                    <Link className="courseDetails" to="/courseDetails">Details</Link>

                                </Col>

                            </Row>

                        </Col>

                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImage"
                                         src="https://image.shutterstock.com/image-photo/happy-millennial-african-american-man-600w-1660490494.jpg"/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start courseTitle">Web Development</h5>
                                    <p className="text-start courseDes">I build native and cross platform mobile app for
                                        your
                                        business app for your
                                        business</p>
                                    <Link className="courseDetails" to="/courseDetails">Details</Link>

                                </Col>

                            </Row>

                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImage"
                                         src="https://image.shutterstock.com/image-photo/focused-young-man-wearing-glasses-600w-1673456497.jpg"/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start courseTitle">Web Development</h5>
                                    <p className="text-start courseDes">I build native and cross platform mobile app for
                                        your
                                        business app for your
                                        business</p>
                                    <Link className="courseDetails" to="/courseDetails">Details</Link>

                                </Col>

                            </Row>

                        </Col>


                    </Row>
                </Container>

            </Fragment>
        )
            ;
    }
}

export default Courses;