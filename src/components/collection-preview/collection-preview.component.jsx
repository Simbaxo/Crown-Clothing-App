import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items }) => (
  <div className="Collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        // filter to show only 4 items
        .filter((item, idx) => idx < 4)
        // map to loop over each item
        .map(({ id, ...itemProps }) => (
          <CollectionItem key={id} {...itemProps} />
        ))}
    </div>
  </div>
)

export default CollectionPreview