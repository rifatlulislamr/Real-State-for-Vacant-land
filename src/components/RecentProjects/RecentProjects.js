import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className="serviceMainTitle text-center">Recent Projects</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12} className="p-3">
                            <Card className="projectCard">
                                <Card.Img variant="top"
                                          src="https://image.shutterstock.com/image-photo/teacher-sitting-table-her-classroom-600w-634019516.jpg"/>
                                <Card.Body>
                                    <Card.Title className="projectCardTitle text-center">Education</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button className="buttonCentering"><Link className="linkStyle"
                                                                              to="/ProjectDetails">Details</Link>
                                    </Button>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col lg={4} md={6} sm={12} className="p-3">
                            <Card className="projectCard">
                                <Card.Img variant="top"
                                          src="https://image.shutterstock.com/image-photo/teacher-sitting-table-her-classroom-600w-634019516.jpg"/>
                                <Card.Body>
                                    <Card.Title className="projectCardTitle text-center">Industry</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button className="buttonCentering"><Link className="linkStyle"
                                                                              to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col lg={4} md={6} sm={12} className="p-3">
                            <Card className="projectCard">
                                <Card.Img variant="top"
                                          src="https://image.shutterstock.com/image-photo/teacher-helping-pupils-studying-writing-600w-1770578366.jpg"/>
                                <Card.Body>
                                    <Card.Title className="projectCardTitle text-center">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button className="buttonCentering"><Link className="linkStyle"
                                                                              to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row>
                </Container>

            </Fragment>
        )
            ;
    }
}

export default RecentProjects;