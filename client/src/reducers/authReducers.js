//reducer functions for auth
//will specify how app state should change in resp to an action
import { SET_CURRENT_USER, USER_LOADING } from '../actions/types.js';

const isEmpty = require('is-empty');

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type){
    case SET_CURRENT_USER:
      return {
      ...state,
      isAuthenticated: !isEmpty(action.payload),
      user: action.payload
    }
    case USER_LOADING:
      return {
        ...state,
        loading: true
      }
      default:
       return state;
  }
};
