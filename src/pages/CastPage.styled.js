import styled from 'styled-components';

export const StyledUl = styled.ul` 
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 20px 10px;
    padding-left: 24px;
    padding-right: 24px;
`;

export const StyledLi = styled.li`
list-style-type: none;
`;

export const StyledName = styled.h3`
padding: 20px;
margin-left: 50px;
color: yellow;
font-size: 30px;
`;