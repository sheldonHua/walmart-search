import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

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

  imageList = (item, key) => {
    return (
      <div key={key}>
        <img src={item.largeImage} />
      </div>
    )
  }

  componentDidMount() {
    this.fetchProduct(this.props.match.params.itemId)
  }

  render() {
    return (
      <div className="product-page">
        <div className="cauousel">
          <Carousel>
            {this.state.payload.imageEntities && this.state.payload.imageEntities.map(this.imageList)}
          </Carousel>
        </div>
      </div>
    )
  }
}

export default ProductPage