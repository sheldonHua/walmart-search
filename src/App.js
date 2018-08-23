import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom'
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

  fetchData = (search, start) => {
    fetch(`https://api.walmartlabs.com/v1/search?apiKey=${key}&numItems=12&start=${start}&query=${search}&start=${this.state.start}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          payload: data,
          wasSearch: true
        })
      })
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
    this.fetchData(this.state.searchProduct, this.state.start)
  }

  componentDidMount() {
    this.fetchTrend()
  }

  render() {
    return (
      
        <div className="App">
          <Header handleSubmit={this.handleSubmit} handleInput={this.handleInput} />
          <div className="wrapper">
          <BrowserRouter>
            <Switch>
              <Route exact path='/' render={() =>
                <ProductList
                  items={this.state.payload.items}
                  fetchData={this.fetchData}
                  searchProduct={this.state.searchProduct}
                  start={this.state.start}
                  wasSearch={this.state.wasSearch}
                />}
              />
              <Route path='/product' render={() =>
                <ProductPage />}
              />
            </Switch>
          </BrowserRouter>
          </div>
        </div>
      
    );
  }
}

export default App;
