export function loader(show) {
  return {
    type: 'SHOW_LOADER',
    loader: show
  }
}

export function fetchSuccessful(payload) {
  return {
    type: 'FETCH_SUCCESSFUL',
    payload
  }
}

export function fetchApiData(url) {
  return (dispatch) => {
    fetch(url)
      .then(response => {
        if(!response.ok) {
          throw Error(response.ok)
        }
        dispatch(loader(true))
        return response
      })
      .then(response => response.json())
      .then(payload => { 
        dispatch(loader(false))
        dispatch(fetchSuccessful(payload))
      })
      .catch(error => console.log(error))
  }
}