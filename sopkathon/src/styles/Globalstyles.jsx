import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

    ${reset}
    
    * {
    box-sizing: border-box;
    }

    html {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgb(0 0 0 / 0%);
    scroll-behavior: smooth;

    font-size: 62.5%;
    user-select: none;

    width: 37.5rem;
    margin: 0 auto;
    }

    html, body, main {
	height : 100vh;
    }

    ul, li {
    padding-left: 0;
    list-style: none;
    }

    a {
    color: inherit;

    text-decoration: none;
    }

    input, button {
    outline: none;

    border: none;
    background-color: transparent;
    }

    button {
    cursor: pointer;

    padding: 0;
    }

    input {
    appearance: none;

    &:focus {
        outline: none;
    }
    }

`;

export default GlobalStyle;
