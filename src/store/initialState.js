export default {
  menu: {
    selected: '',
    anchorEl: null,
    selectedIndex: 0,
  },
  character: {
    url: '',
    isFetching: false,
    profile: {},
    error: null
  },
  movies: {
    isFetching: false,
    movies: [],
    error: null
  }
}
