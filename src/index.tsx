import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store } from './Redux/Store';
import { Provider as ReduxProvider } from 'react-redux';
import { saveState } from './Redux/State';
import { debounce } from 'debounce';

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800),
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter basename='/PoE-Idle'>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
