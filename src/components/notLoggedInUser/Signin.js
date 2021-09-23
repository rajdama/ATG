import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import google from "../../images/google.png"
import facebook from "../../images/facebook.png"
function Signup() {
    return (

        <div className="register-photo" >
            <div className="form-container" >
                <Form>
                    <Row className="mb-3">
                    <h3 style={{marginBottom:"10px", textAlign:"center"}}>Sign in</h3>
                  
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        {/* <Form.Label>Email</Form.Label> */}
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control text="password" placeholder="Enter passsword" />
                    </Form.Group>

                   
                    <Button id="form-button_1">
                        Sign in
                    </Button>
                    <Button id="form-button_2">
                        <img src={facebook} />
                    </Button>
                    <Button id="form-button_2">
                        <img src={google} />
                    </Button>
                   
                    <Button id="forgot">
                        <strong>Forgot password?</strong>
                    </Button>
                   
                </Form>
                <div className="image-holder ">  </div>
            </div>
        </div>
    )
}

export default Signup
