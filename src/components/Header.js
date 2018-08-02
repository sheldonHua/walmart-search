import React from 'react'
import Search from './Search'

const Header = (props) => {

  const { handleSubmit, handleInput } = props;

  return (
    <header className="App-header">
      <div className="wrapper">
        <h1>Walmart</h1>
        <Search handleInput={handleInput} submit={handleSubmit} />
      </div>
    </header>
  )
}

export default Header