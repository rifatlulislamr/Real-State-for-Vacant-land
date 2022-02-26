import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";


class Analysis extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {Technology: 'Dhaka', Project: '100'},
                {Technology: 'Chittagong', Project: '40'},
                {Technology: 'Sylhet', Project: '90'},
                {Technology: 'Barisal', Project: '95'},
                {Technology: 'Khulna', Project: '60'},
                {Technology: 'M.sing', Project: '90'},
                {Technology: 'Rajshahi', Project: '100'},
                {Technology: 'Rangpur', Project: '65'}


            ]
        }
    }


    render() {
        var blue = "rgba(0,115,230,0.8)"
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Technology Used</h1>
                    <Row>
                        <Col style={{width: '50%', height: '300px'}} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={50} height={300} data={this.state.data}>

                                    <XAxis dataKey="Technology"/>
                                    <Tooltip/>
                                    <Bar dataKey="Project" fill={blue}>

                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>


                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <p className="text-start des">Technology is the sum of any techniques, skills,
                                methods, and
                                processes used in the
                                production of goods or services or in the accomplishment of objectives, such as
                                scientific investigation.
                                Technology is the sum of any techniques, skills, methods, and processes used in the
                                production of goods or services or in the accomplishment of objectives, such as
                                scientific investigation.
                                Technology is the sum of any techniques, skills, methods, and processes used in the
                                production of goods or services or in the accomplishment of objectives, such as
                                scientific investigation.Technology is the sum of any techniques, skills, methods, and
                                processes used in the production of goods or services or in the accomplishment of
                                objectives, such as scientific investigation.
                            </p>
                        </Col>
                    </Row>

                </Container>


            </Fragment>
        )
            ;
    }
}

export default Analysis;