import { FEATURED_COURSES, COURSES_RESULT } from '../constants'

const initialState = {
  featuredCourses: [],
  courses: [],
  length: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FEATURED_COURSES: {
      return { ...state, featuredCourses: action.featuredCourses }
    }
    case COURSES_RESULT: {
      return { ...state, courses: action.courses, length: action.length }
    }
    default: {
      return state
    }
  }
}