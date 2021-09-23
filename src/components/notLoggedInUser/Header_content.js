import React from 'react'
import { Dropdown } from 'react-bootstrap'

function Header_content({ windowWidth }) {
    return (
        <header className="p-3 bg-white  text-secondary">

            <div className={`container post"  ${(windowWidth > 1094 ? "show" : "hidden")}`}>
                <div className={"d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start "}>

                    <ul className={"nav col-12 col-lg-auto me-lg-auto  justify-content-center mb-md-0 "}>
                        <li><a href="#" className="nav-link px-2 text-dark">All posts(32)</a></li>
                        <li><a href="#" className="nav-link px-2 text-secondary">Article</a></li>
                        <li><a href="#" className="nav-link px-2 text-secondary">Event</a></li>
                        <li><a href="#" className="nav-link px-2 text-secondary">Education</a></li>
                        <li><a href="#" className="nav-link px-2 text-secondary">Job</a></li>
                    </ul>


                    <div className="text-end">
                        <button style={{ marginRight: "38px" }} type="button" className="btn btn-light">Write a post</button>
                        <button type="button" className="btn btn-primary">Join group</button>
                    </div>
                </div>
            </div>
            <div className={`  ${(windowWidth < 1094 ? "show" : "hidden")}`}>
                <div style={{ display: "flex", justifyContent: "space-between" }} >
                    <a href="#" className="nav-link px-2 text-dark">All posts(32)</a> <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Filter: All
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

        </header>
    )
}

export default Header_content
