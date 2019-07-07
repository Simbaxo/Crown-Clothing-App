import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
  <div style={{
    // dynamic styles to add image
    backgroundImage: `url(${imageUrl})`
  }} className={`${size} menu-item`}
  >
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOW NOW</span>
    </div>
  </div>
)

export default MenuItem