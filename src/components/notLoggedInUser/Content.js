import React from 'react'
import Header_content from "./Header_content"
import Mid_content from './Mid_content'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import Navigationbar from './Navigationbar'
import Signup from './Signup'


function Content({ windowWidth }) {

    return (

        <>

            <Navigationbar windowWidth={windowWidth} />
            <Container>
                <Row >
                    <Col md={{ span: 12, offset: 0 }}><Header_content windowWidth={windowWidth} /></Col>
                </Row>
            </Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }}><Mid_content windowWidth={windowWidth} /></Col>
            </Row>
        </>
    )
}

export default Content
