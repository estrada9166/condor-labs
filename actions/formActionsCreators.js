export const inputChange = (title, name, val) => dispatch => {
  return dispatch ({ type: 'INPUT_VAL', title, name, val})
}
