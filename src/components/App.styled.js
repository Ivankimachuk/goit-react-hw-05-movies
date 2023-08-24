import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  border-bottom: 1px solid black;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 15px 25px;
  margin: 10px;
  text-decoration: none;
  color: black;
  display: inline-block;

  font-size: 22px;
  border-radius: 8px;
 

  transition: all 0.3s;
  
  &.active {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

