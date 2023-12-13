import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-family: 'Roboto Slab', sans-serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  *{--sb-track-color: transparent;
    --sb-thumb-color: ${({ theme }) => theme.COLORS.SALMON};
    --sb-size: 8px;
  }  

  *::-webkit-scrollbar {
    width: 8px; 
    height: 8px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 8px;
  }

  *::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.SALMON};
    border-radius: 8px;
  }
`;