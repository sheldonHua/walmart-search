import React, { Component } from 'react';

const key = `${process.env.REACT_APP_WALMART_APIKEY}`

class ProductPage extends Component {
  state = {
    payload: {}
  }

  fetchProduct = (itemId) => {
    fetch(`https://api.walmartlabs.com/v1/items/${itemId}?apiKey=${key}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          payload: data,
        })
      })
  }

  componentDidMount() {
    this.fetchProduct(this.props.match.params.itemId)
  }

  render() {
    return (
      <div className="product-list">
        product page
      </div>
    )
  }
}

export default ProductPage