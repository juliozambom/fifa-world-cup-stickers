import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        border: none;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;
