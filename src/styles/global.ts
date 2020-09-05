import { createGlobalStyle } from 'styled-components';

import GithubImg from '../assets/images/Github.png';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  /* #F2F2FA */

  body {
    background: #121214 url(${GithubImg}) no-repeat left 65% top;
    overflow-x: hidden;
  }

  html, body, #root {
    /* height: 100vh; */
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    color: #fbfbfb;
  }

  button {
    cursor: pointer;
  }

  .container {
    width: 90vw;
    max-width: 960px;
    margin: 0 auto;
  }
`;
