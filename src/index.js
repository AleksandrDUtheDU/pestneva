import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from './components/theme/Theme'
import App from './components/app/App';
import FontStyles from './components/theme/FontStyles';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const Global = createGlobalStyle`

* {
    font-family: 'Roboto', sans-serif;
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

a {
    text-decoration: none;
    color: inherit;
    display: inline-block;

    &:hover {
        text-decoration: none;
        color: inherit;
    }
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

// const theme = {
//     colors: {
//         primary: "#FFA501"
//     }

// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <FontStyles />
            <Global />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

