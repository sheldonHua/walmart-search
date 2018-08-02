import React from 'react'

const Search = (props) => {

  const { submit, handleInput } = props;

  return (
    <div className="search">
      <form onSubmit={submit}>
        <input type="text" onChange={handleInput} />
        <button onClick={submit}>Search</button>
      </form>
    </div>
  )
}

export default Search