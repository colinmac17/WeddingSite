import styled from 'styled-components';

export const Title = styled.h1`
    font-size:56px;
    font-weight: 900;
    font-family: 'Damion', cursive;
    color: ${props => props.color};
`;

export const HR = styled.hr`
    border-bottom: ${props => props.borderBottom};
`;

export const DateOfWedding = styled.h3`
    font-family: 'La Belle Aurore', cursive;
    font-weight: 700;
    text-align: center;
    padding-top: 20px;
    color: ${props => props.color};
`;