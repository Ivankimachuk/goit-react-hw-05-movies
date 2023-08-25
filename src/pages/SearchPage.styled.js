import styled from 'styled-components';

export const StyledForm = styled.form`
    max-width: 400px;
    margin: 0px auto;
    padding: 4px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledInput = styled.input`
    width: 100%;
    height: 22px;
    padding: 4px;
    border-radius: 4px 0px 0px 4px;
    border-top: 1px solid rgb(194, 194, 194);
    border-bottom: 1px solid rgb(194, 194, 194);
    border-left: 1px solid rgb(194, 194, 194);
    border-image: initial;
    border-right: none;
    outline: none;
`;

export const StyledButton = styled.button`
    height: 32px;
    text-transform: uppercase;
    border-radius: 0px 4px 4px 0px;
    border-top: 1px solid rgb(194, 194, 194);
    border-right: 1px solid rgb(194, 194, 194);
    border-bottom: 1px solid rgb(194, 194, 194);
    border-image: initial;
    border-left: none;
    outline: none;
    cursor: pointer;
`;

export const StyledNothing = styled.p`
    margin-top: 20px;
    color: yellow;
    text-align: center;
`;