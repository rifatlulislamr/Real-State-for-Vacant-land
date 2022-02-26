import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import riadlogo from '../../asset/image/twitter-3-logo-svgrepo-com.svg'


class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">SERVICES</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={riadlogo}/>
                                <h1 className="serviceName">DHAKA</h1>
                                <p className="serviceDescription">he origins of the name Dhaka are uncertain. Once dhak
                                    trees were very common in the area and the name may have originated from it.
                                    Alternatively, this name may refer to the hidden Hindu goddess Dhakeshwari, whose
                                    temple is located in the south-western part of the city.
                                </p>
                            </div>

                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={riadlogo}/>
                                <h1 className="serviceName">CHITTAGONG</h1>
                                <p className="serviceDescription">The etymology of Chittagong is uncertain.[14] One
                                    explanation credits the first Arab traders for shatt ghangh (Arabic: شط غنغ) where
                                    shatt means "delta" and ghangh stood for the Ganges.[14][15][16] The Arakanese
                                    chronicle that a king named Tsu-la-taing Tsandaya, after conquering Bengal, set up a
                                </p>

                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={riadlogo}/>
                                <h1 className="serviceName">SYLHET</h1>
                                <p className="serviceDescription">Sylhet is located at 24.8917°N 91.8833°E, in the
                                    northeastern region of Bangladesh within the Sylhet Division, the Sylhet District
                                    and Sylhet Sadar Upazila. Sylhet has a typical Bangladeshi tropical monsoon climate
                                    te (Cwa) at higher elevations. The
                                    showers and thunderstorms almost every day, whilst the short dry season starts from
                                    November to February a
                                </p>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        )
            ;
    }
}

export default Services;