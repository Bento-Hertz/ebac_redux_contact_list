import { createGlobalStyle } from 'styled-components';

export const colors = {
    yellow: '#e3dc10',
    red: '#e31010',
    green: '#37e310',
    gray: '#eeeeee',
    blue: '#1061e3'
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: Roboto, sans-serif;
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        padding: 32px;
    }

    input:focus {
        outline: none;
    }

    button {
        border: none;
        border-radius: 8px;
        padding: 8px 16px;
        color: white;
        cursor: pointer;
    }
`