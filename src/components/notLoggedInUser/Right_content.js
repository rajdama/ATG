import React from 'react'

function Right_content({windowWidth}) {
    return (
        <div className={`${(windowWidth < 1094 ? "hidden" : "show")}`}>
          <div>
            <span > 📌 Noida, India </span>
            <span style={{ marginLeft: "100px", marginRight: "20px" }} > 🖊️</span>
          </div>
          <div style={{ marginTop: "12px" }}>
            Your location will help  us serve better <br /> and extend a personal
          </div>
        </div>
    )
}

export default Right_content
