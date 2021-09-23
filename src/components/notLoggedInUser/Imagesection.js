import React from 'react'
import header_img from '../../images/header_img.png'
function Imagesection({windowWidth}) {
    
    return (
        <>
    <div className="img_div">
   <img className="computer_img"  src={header_img} />
        
  <div class={`${(windowWidth < 1094 ? "bottom-left-mobile" : "bottom-left-desktop")}`}><h3 >Computer Engineering</h3>
                                <p>142,765 Computer Engineers follow this</p></div>
  
  <div class={`top-right ${(windowWidth < 1094 ? "show" : "hidden")}`}><button type="button" id="join" class="btn">Join </button></div>
  </div>


        </>
    )
}

export default Imagesection
