import { INPUT_VAL } from '../constants'

const initialState = {
  search: {}
};

export default (state = initialState, action ) => {
  switch (action.type) {
    case INPUT_VAL: {
      return { ...state, 
        [action.title]: 
          { ...state[action.title],  
            [action.name]: action.val 
          }
      }
    }
    default: {
      return state
    }
  }
}