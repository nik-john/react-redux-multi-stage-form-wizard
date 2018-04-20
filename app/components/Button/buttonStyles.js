import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid ${(props) => props.theme.blue};
  color: ${(props) => props.theme.blue};
  transition: all 300ms ease;
  &:active {
    background: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
  }
  &:hover {
    background: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
  }
`;

export default buttonStyles;
