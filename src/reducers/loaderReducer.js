export function loader(state = [], action) {
  switch (action.type) {
    case 'SHOW_LOADER':
      return action.loader;
    default:
      return state;
  }
}