import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

//Redux Toolkit
import { Provider } from 'react-redux';
import { store } from './store/reduxStore/store';

//Context
import DateProvider from './store/contextStore/DateProvider';
import GenreProvider from './store/contextStore/GenreProvider';
//STYLING
import './global.css';

// This is for React 18, which introduces a new root API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //import in and set the store props for React/Redux to know
  //allows every React component to have access to redux global store
  <Provider store={store}>
    <DateProvider>
      <GenreProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GenreProvider>
    </DateProvider>
  </Provider>
);
