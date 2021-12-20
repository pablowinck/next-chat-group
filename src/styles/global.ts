import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    html, body, #root {
        height: 100%;
    }

    input {
        outline: none;
        border: none;
    }

    input:focus, button:focus, a:focus {
        outline: none;
        border: none;
        box-shadow: 0 0 0 2px #252329, 0 0 0 4px #7159c1;
    }
`;
