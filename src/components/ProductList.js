import React from 'react'

const ProductList = (props) => {

  const { items } = props;

  const createList = (item, i) => {
    return (<li key={i}>
              <img src={item.thumbnailImage} />
              <h2 className="product-list-heading">{ item.name }</h2>
              <h1>${item.salePrice}</h1>
            </li>
           )
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