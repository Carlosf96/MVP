import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const initialState={};

const middleware = [thunk];

const store = createStore( 
  () => [],
  initialState,
  compose(
    applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && //allows to use redux dev extension in browser
  window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);