import React from 'react'

const ProductList = (props) => {

  const { items } = props;

  const createList = (item, i) => {
    return <li key={i}>{ item.name }</li>
  }

  return (
    <div className="product-list">
      <ul>
        { items && items.map(createList) }
      </ul>
    </div>
  )
}

export default ProductList