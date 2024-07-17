import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MemoryRouter } from 'react-router-dom';
import { GameStateProvider } from './Providers/GameStateProvider';
import { TimerProvider } from './Providers/TimerProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <TimerProvider>
      <GameStateProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </GameStateProvider>
    </TimerProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
