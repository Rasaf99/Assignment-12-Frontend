import React from 'react';
import ReactDOM from 'react-dom/client';

// styles
import 'styles/index.css';
import MuiTheme from 'styles/mui-theme/mui-theme'

// context
import AUTH_CONTEXT_PROVIDER from 'context/auth-context';


// App.jsx
import App from './App';


const root = ReactDOM.createRoot
  (document.getElementById('root'));
root.render(
  
    <MuiTheme>
      <AUTH_CONTEXT_PROVIDER>
        <App />
      </AUTH_CONTEXT_PROVIDER>
    </MuiTheme>
  
);