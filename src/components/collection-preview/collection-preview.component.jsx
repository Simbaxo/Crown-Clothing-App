import React from 'react'
import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items }) => (
  <div className="Collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        // filter to show only 4 items
        .filter((item, idx) => idx < 4)
        // map to loop over each item
        .map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
    </div>
  </div>
)

export default CollectionPreview