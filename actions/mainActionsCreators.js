import axios from 'axios'
import { FEATURED_COURSES_URL, FEATURED_COURSES, COURSES, 
  COURSES_RESULT, SEARCH_URL } from '../constants'

export const getFeaturedCourses = () => dispatch => {
  return axios.get(FEATURED_COURSES_URL)
  .then(response => {
    return dispatch ({ type: FEATURED_COURSES, featuredCourses: response.data })
  })
  .catch(err => {
    console.log(err)
  })
}

export const getCourses = () => dispatch => {
  return axios.get(COURSES)
  .then(response => {
    return dispatch ({ 
      type: COURSES_RESULT, 
      courses: response.data.items, 
      length: response.data.totalItems 
    })
  })
  .catch(err => {
    console.log(err)
  })
}

export const search = text => dispatch => {
  return axios.get(SEARCH_URL+text)
  .then(response => {
    return dispatch ({ 
      type: COURSES_RESULT, 
      courses: response.data.items, 
      length: response.data.totalItems 
    })
  })
  .catch(err => {
    console.log(err)
  })
}