import React from 'react';
import {Routes} from './src/Routes';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './src/redux/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
