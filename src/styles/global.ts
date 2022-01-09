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
        overflow: hidden;
    }

    input {
        outline: none;
        border: none;
    }

    button {
        outline: none;
        border: none;
        cursor: pointer;
    }
`;
