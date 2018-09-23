export function items(state = [], action) {
  switch (action.type) {
    case 'FETCH_SUCCESSFUL':
      return action.payload;
    default:
      return state;
  }
}