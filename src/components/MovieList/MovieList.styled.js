import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// export const StyledNavLink = styled(NavLink)`
//   padding: 15px 25px;
//   margin: 10px;
//   text-decoration: none;
// `;

// export const Container = styled.div`
//     display: flex;
//     flex-flow: wrap;
//     gap: 15px;
//     padding: 0px;
//     margin: 0px;
//     max-width: 900px;
// `;
// export const StyledTitle = styled.h3`
//     color: yellow;
//     margin-bottom: 10px;
// `;
// export const StyledImage = styled.img`
//    width: 100%;
//     height: auto;
//     object-fit: cover;
//     object-position: center center;
//     transition: transform 0.2s ease-in-out 0s;
//     border-radius: 8px;
// `;
export const StyledNavLink = styled(NavLink)`
  width: 300px; /* Задайте фіксовану ширину, наприклад, 300px */
     margin: 10px; /* Додайте відступи між елементами */
     text-decoration: none;
     color: black;
     display: inline-block;
     font-size: 22px;
     border-radius: 8px;
     transition: all 0.3s;
`;

export const Container = styled.div`
   display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    gap: 50px;
    margin-left: 60px;
`;
export const StyledTitle = styled.h3`
    color: yellow;
    margin-bottom: 10px;
    max-width: 100%; 
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
`;
export const StyledImage = styled.img`
   width: 100%;
   height: auto;
   margin-top: 20px;

    transition: transform 0.2s ease-in-out 0s;
    border-radius: 8px;
`;

