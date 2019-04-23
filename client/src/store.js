import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import { composeWithDevTools } from 'redux-devtools-extension';


const initialState={};

const middleware = [thunk];

const store = createStore( 
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),	    applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && //allows to use redux dev extension in browser	  window.__REDUX_DEVTOOLS_EXTENSION__ && //allows to use redux dev extension in browser
  window.__REDUX_DEVTOOLS_EXTENSION__()
  )	
);

export default store;