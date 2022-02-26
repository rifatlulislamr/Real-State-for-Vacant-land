import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";

class ClientReview extends Component {
    render() {
        var settings = {
            autoplaySpeed: 1000,
            autoplay: true,
            dots: true,
            infinite: true,
            speed: 2000,
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>

                <Container className="text-center">
                    <h1 className="serviceMainTitle">CLIENT SAYS</h1>
                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg"
                                         src="https://www.facebook.com/photo/?fbid=3027400054179300&set=a.1380063142246341"/>
                                    <h1 className="serviceName">Web Development</h1>
                                    <p className="serviceDescription"> i analysis the requirement of project.
                                        According to the requirement i make a proper technical analysis, then i build a
                                        software architecture. According to the planning i start coding</p>
                                </Col>
                            </Row>
                        </div>


                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg"
                                         src="https://www.facebook.com/photo/?fbid=3027400054179300&set=a.1380063142246341"/>
                                    <h1 className="serviceName">Web Development</h1>
                                    <p className="serviceDescription"> i analysis the requirement of project.
                                        According to the requirement i make a proper technical analysis, then i build a
                                        software architecture. According to the planning i start coding</p>
                                </Col>
                            </Row>
                        </div>


                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg"
                                         src="https://www.facebook.com/photo/?fbid=3027400054179300&set=a.1380063142246341"/>
                                    <h1 className="serviceName">Web Development</h1>
                                    <p className="serviceDescription"> i analysis the requirement of project.
                                        According to the requirement i make a proper technical analysis, then i build a
                                        software architecture. According to the planning i start coding</p>
                                </Col>
                            </Row>
                        </div>

                    </Slider>


                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;