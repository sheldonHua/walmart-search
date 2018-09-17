import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchApiData } from './actions/'
import './App.css';
import Header from './components/Header'
import ProductList from './components/ProductList'
import ProductPage from './components/ProductPage'

const key = `${process.env.REACT_APP_WALMART_APIKEY}`

class App extends Component {
  state = {
    searchProduct: '',
    payload: {},
    start: 12,
    wasSearch: false
  }

  fetchData1 = (search, start) => {
    this.props.fetchData(`https://api.walmartlabs.com/v1/search?apiKey=${key}&numItems=12&start=${start}&query=${search}&start=${this.state.start}`)
  }

  fetchTrend = () => {
    fetch(`http://api.walmartlabs.com/v1/trends?apiKey=${key}&numItems=6`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          payload: data
        })
      })
  }

  handleInput = (e) => {
    this.setState({
      searchProduct: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.fetchData1(this.state.searchProduct, this.state.start)  
    this.props.history.push('/')  
  }

  componentDidMount() {
    this.fetchTrend()
  }

  render() {
    return (
        <div className="App">
          <Header handleSubmit={this.handleSubmit} handleInput={this.handleInput} />
          <div className="wrapper">
              <Route exact path='/' render={() =>
                <ProductList
                  items={this.props.items.items}
                  fetchData={this.fetchData}
                  searchProduct={this.state.searchProduct}
                  start={this.state.start}
                  wasSearch={this.state.wasSearch}
                />}
              />
              <Route path='/product/:itemId' component={ProductPage} />
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = dispatch => ({
  fetchData: (url) => dispatch(fetchApiData(url))
})

export default compose(  
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(App)
