import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import google from "../../images/google.png"
import facebook from "../../images/facebook.png"
import { Link } from 'react-router-dom'
function Signup() {
    return (

        <div className="register-photo" >
            <div className="form-container" >
                <Form>
                    <Row className="mb-3">
                    <h3 style={{marginBottom:"10px", textAlign:"center"}}>Create</h3>
                        <Form.Group as={Col}>
                            {/* <Form.Label>First Name</Form.Label> */}
                            <Form.Control type="text" placeholder="Enter first name" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            {/* <Form.Label>Last Name</Form.Label> */}
                            <Form.Control type="text" placeholder="Enter last name" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        {/* <Form.Label>Email</Form.Label> */}
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control text="password" placeholder="Enter passsword" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            {/* <Form.Label>Confirm password</Form.Label> */}
                            <Form.Control text="password" placeholder="Confirm passsword" />
                        </Form.Group>
                    </Row>
                    <Button id="form-button_1">
                        Create account
                    </Button>
                    <Button id="form-button_2">
                        <img src={facebook} />
                    </Button>
                    <Button id="form-button_2">
                        <img src={google} />
                    </Button>
                    <div>You already have an account?<Link style={{textDecoration:"none"}} to="/signin"> Login here.</Link></div>
                </Form>
                <div className="image-holder ">  </div>
            </div>
        </div>
    )
}

export default Signup
