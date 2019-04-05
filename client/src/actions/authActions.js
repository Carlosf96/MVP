//create our actions
//Import dependencies and action definitions from types.js

import axios from 'axios';//Use axios to make HTTPRequests within certain action

import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
//Use dispatch to send actions to our reducers

import { 
  GET_ERRORS, 
  SET_CURRENT_USER, 
  USER_LOADING } from './types';
//