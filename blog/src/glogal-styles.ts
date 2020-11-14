import { createGlobalStyle } from 'styled-components';

import { backgroundColor } from './constants/colors';

export default createGlobalStyle`
    /* 
     * Reset css
     */
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body, html, #root {
        width: 100%;
        min-height: 100%;
    }

    /*
    * Setting bg and font normal 
    */

    body {
        background-color: ${(_) => backgroundColor};
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
    }
   
    a {
        text-decoration: none;
    }

`;
