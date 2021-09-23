import React from 'react'
import { Card, Button, Dropdown } from 'react-bootstrap'
import sarthak from '../../images/sarthak.png'
import sarthak_img from '../../images/sarthak_img.png'
import sarah from '../../images/sarah.png'
import sarah_img from '../../images/sarah_img.png'
import ronal from '../../images/ronal.png'
import ronal_img from '../../images/ronal_img.png'
import joseph from '../../images/joseph.png'
import visibilitey from '../../images/visibilitey.png'
import share from '../../images/share.png'
function Left_content() {
    return (
        <div>
      <Card style={{objectFit:"contain",marginBottom: "20px" }}>
          <Card.Img variant="top" src={sarthak_img} />
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">✍️ Article</Card.Subtitle>
            <Card.Title>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span> What if famous brands had regular fonts?
                  Meet RegulaBrands!</span>
                <Dropdown>
                  <Dropdown.Toggle style={{ color: "black", backgroundColor: "white", border: "1px solid white" }}>

                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card.Title>
            <Card.Text>
              I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
            </Card.Text>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <span><img src={sarthak} /></span>
                <span> Sarthak Kamra</span>
              </div>
              <div style={{ marginTop: "10px" }}>   
                <span><img src={visibilitey} /></span>
                <span  className="eye">1.4k views  </span>
                <span><img src={share} /></span>
              </div>
            </div>
          </Card.Body>

        </Card>
        <Card style={{marginBottom: "20px" }}>
          <Card.Img variant="top" src={sarah_img} />
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">🔬️ Education</Card.Subtitle>
            <Card.Title>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span> Tax Benefits for Investment under National Pension Scheme<br/> launched by Government</span>
                <Dropdown>
                  <Dropdown.Toggle style={{ color: "black", backgroundColor: "white", border: "1px solid white" }}>

                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card.Title>
            <Card.Text>
              I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
            </Card.Text>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <span><img src={sarah} /></span>
                <span> Sarah West</span>
              </div>
              <div style={{ marginTop: "10px" }}>   
                <span><img src={visibilitey} /></span>
                <span  className="eye">1.4k views  </span>
                <span><img src={share} /></span>
              </div>
            </div>
          </Card.Body>

        </Card>
        <Card style={{marginBottom: "20px" }}>
          <Card.Img variant="top" src={ronal_img} />
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">🗓️ Meetup</Card.Subtitle>
            <Card.Title>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span> Finance & Investment Elite Social Mixer @Lujiazui</span>
                <Dropdown>
                  <Dropdown.Toggle style={{ color: "black", backgroundColor: "white", border: "1px solid white" }}>

                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card.Title>
            <Card.Text style={{display:"flex", justifyContent:"space-around"}}>
              <span >📅Fri, 12 Oct, 2018</span>
              <span > 📍 Ahmedabad, India</span>
            </Card.Text>
              <button id="card_btn">Visit Website</button>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <span><img src={ronal} /></span>
                <span> Ronal Jones</span>
              </div>
              <div style={{ marginTop: "10px" }}>   
                <span><img src={visibilitey} /></span>
                <span  className="eye">1.4k views  </span>
                <span><img src={share} /></span>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card style={{marginBottom: "20px" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">💼️ Job</Card.Subtitle>
            <Card.Title>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
               <span>Software Developer</span>
                <Dropdown>
                  <Dropdown.Toggle style={{ color: "black", backgroundColor: "white", border: "1px solid white" }}>

                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card.Title>
            <Card.Text style={{display:"flex", justifyContent:"space-around"}}>
              <span >👜 Innovaccer Analytics Private Ltd.</span>
              <span >📍 Noida, India</span>
            </Card.Text>
              <button id="card_btn" style={{color:"green"}}>Apply on Timesjobs</button>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <span><img src={joseph} /></span>
                <span> Joseph Gray</span>
              </div>
              <div style={{ marginTop: "10px" }}>   
                <span><img src={visibilitey} /></span>
                <span  className="eye">1.4k views  </span>
                <span><img src={share} /></span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
}

export default Left_content
