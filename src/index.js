import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
// import { BrowserRouter } from "react-router-dom";


import { theme } from './app/theme/Theme'
import App from './app/App';
import FontStyles from './app/theme/FontStyles';


import './style/bootstrap.min.css'
import './style/bootstrap.min.css.map'
import './style/style.css'


const Global = createGlobalStyle`

* {
    /* font-family: 'Roboto', sans-serif; */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

ul,
li,
dl {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
}


p {
    margin: 0;
    padding: 0;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <BrowserRouter> */}
        <ThemeProvider theme={theme}>
            <FontStyles />
            <Global />
            <App />
        </ThemeProvider>
        {/* </BrowserRouter> */}
    </React.StrictMode>
);

