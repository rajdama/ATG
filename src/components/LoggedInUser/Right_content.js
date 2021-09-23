import React from 'react'
import { FormControl, Form } from 'react-bootstrap'
import lesiure from "../../images/lesiure.png"
import activism from "../../images/activism.png"
import MBA from "../../images/MBA.png"
import philosophy from "../../images/philosophy.png"
function Right_content({ windowWidth }) {
    return (
        <div className={`${(windowWidth < 1280 ? "hidden" : "show")}`} >

            <Form style={{ marginRight: "20px" }} className="d-flex">
                <FormControl style={{
                    width: "260px", height: "40px", borderRadius: "10px"
                }}
                    type="search"
                    placeholder="Enter your location"
                    className="mr-2"
                    aria-label="Search"
                />

            </Form>

            <div style={{ marginTop: "12px" }}>
                Your location will help  us serve better <br /> and extend a personal
            </div>

            <div style={{ marginTop: "10px" }}>
                👍 RECOMMENDED GROUPS
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                <div>
                    <img src={lesiure} />
                    <span>  Leisure</span>
                </div>
                <button id="follow">
                    follow
                </button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                <div>
                    <img src={activism} />
                    <span>  Activism </span>
                </div>
                <button id="follow">
                    follow
                </button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                <div>
                    <img src={MBA} />
                    <span>  MBA</span>
                </div>
                <button id="follow">
                    follow
                </button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                <div>
                    <img src={philosophy} />
                    <span>  Philosophy</span>
                </div>
                <button id="follow">
                    follow
                </button>
            </div>
            <div className="text-center my-3"><a href="#" style={{ textDecoration: "none" }}>see more...</a></div>
        </div>
    )
}

export default Right_content
