import {createGlobalStyle}  from 'styled-components';
import { RespondTo } from './breakpoints/RespondTo';

export const GlobalStyle = createGlobalStyle`
  *, html {padding:0; margin:0;}
  html, body {
  height: 100%;
  }
  body {
    transition: all 0.3s linear;
    background: ${props => props.theme.backgroundColor};
    background: -moz-linear-gradient(top,  ${props => props.theme.backgroundColorGradientStart} 0%, ${(props) => props.theme.backgroundColorGradientMiddle ? ` ${props.theme.backgroundColorGradientMiddle} 50%,` : ""} ${props => props.theme.backgroundColorGradientEnd} 100%);
    background: -webkit-linear-gradient(top,  ${props => props.theme.backgroundColorGradientStart} 0%, ${(props) => props.theme.backgroundColorGradientMiddle ? ` ${props.theme.backgroundColorGradientMiddle} 50%,` : ""} ${props => props.theme.backgroundColorGradientEnd} 100%);
    background: linear-gradient(to bottom,  ${props => props.theme.backgroundColorGradientStart} 0%, ${(props) => props.theme.backgroundColorGradientMiddle ? ` ${props.theme.backgroundColorGradientMiddle} 50%,` : ""} ${props => props.theme.backgroundColorGradientEnd} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${props => props.theme.backgroundColorGradientStart}', endColorstr='${props => props.theme.backgroundColorGradientEnd}',GradientType=0 );
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${props => props.theme.textColor};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  img {
    max-width: 100%;
  }

  .content-body {
    padding-top: 4em;
  }

  .boxed {
    margin: 0 auto;
    width: 80%;
    ${RespondTo.xs`
    `}
    ${RespondTo.sm`
      text-align: center;
    `}
    ${RespondTo.md`
      max-width: 900px;
    `}
    ${RespondTo.lg`
      width: 70%;
    `}
  }

  .fullWidth {
    width: 100%;
  }

`;
