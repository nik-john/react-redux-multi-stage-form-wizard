import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
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
  border: 2px solid ${(props) => props.theme.colors.global.white};;
  color: ${(props) => props.theme.colors.global.white};;

  &:active, &:hover {
    background-color: ${(props) => props.theme.colors.global.blue};
    color: ${(props) => props.theme.colors.text.light};
  }
`;
