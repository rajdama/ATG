import React from 'react'
import Left_content from './Left_content'
import Right_content from './Right_content'

function Mid_content({ windowWidth }) {

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Left_content />
        <Right_content windowWidth={windowWidth} />
      </div>
    </>
  )
}

export default Mid_content
