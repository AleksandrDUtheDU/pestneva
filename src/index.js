import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore } from 'redux'



import reducer from './components/reducer/reducer';
import { theme } from './components/theme/Theme'
import App from './components/app/App';
import FontStyles from './components/theme/FontStyles';


import './style/bootstrap.min.css'
import './style/bootstrap.min.css.map'
import './style/style.css'


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

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {}

const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() /// инициация Redux DevTools
);

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <FontStyles />
                <Global />
                <App />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);

