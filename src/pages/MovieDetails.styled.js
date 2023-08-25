import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled(NavLink)`
max-width: 100px;
padding: 4px;
margin-bottom: 16px;
display: flex;
align-items: center;
justify-content: center;
gap: 4px;
border-radius: 4px;
font-size: 14px;
font-weight: 500;
text-align: center;
text-transform: uppercase;
background-color: rgb(240, 240, 240);
box-shadow: rgba(34, 60, 80, 0.2) 1px 2px 5px 0px;
padding: 5px;
`;

export const Container = styled.div`
    margin-top: 20px;
    padding-left: 24px;
    padding-right: 24px;
`;

export const StyledTitle = styled.h2`
color: yellow;
padding: 20px;
`;

export const StyledInfo = styled(NavLink)`
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
