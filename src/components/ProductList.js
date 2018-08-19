import React, { Component } from 'react';

class ProductList extends Component {
  state = {
    start: this.props.start
  }

  createList = (item, i) => {
    return (<li key={i}>
              <img src={item.thumbnailImage} />
              <h2 className="product-list-heading">{ item.name }</h2>
              <h1>${item.salePrice}</h1>
            </li>
           )
  }

  paginationNext = () => {
    let start = this.state.start
    this.setState({
      start: start + this.props.start
    }, () => {
      this.props.fetchData(this.props.searchProduct, this.state.start)
    }) 
  }

  paginationPrevious = () => {
    let start = this.state.start
    this.setState({
      start: this.state.start - this.props.start
    }, () => {
      this.props.fetchData(this.props.searchProduct, this.state.start)
    })
  }

  render() {
    console.log(this.state.start)
    return (
      <div className="product-list">
        <ul>
          {this.props.items && this.props.items.map(this.createList)}
        </ul>

        {
          this.props.wasSearch &&
          <div className="pagination">
            {
              this.props.items && 
                <button 
                  className="pagination-button" 
                  disabled={this.state.start <= this.props.start ? true : false} 
                  onClick={this.paginationPrevious}>Previous
                </button>
              }
            {
              this.props.items && 
                <button 
                  className="pagination-button" 
                  onClick={this.paginationNext}>Next
                </button>
            }
          </div>
        }

      </div>
    )
  }
}

export default ProductList