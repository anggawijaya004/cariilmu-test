import React from 'react';
import * as ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux'
import store from './store'
import { yellow } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: yellow,
    secondary: {
      main: '#027130',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 12
  },
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
