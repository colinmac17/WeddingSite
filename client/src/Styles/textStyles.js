import styled from 'styled-components';

export const MainTitle = styled.h1`
    font-size:56px;
    font-weight: 900;
    font-family: 'Parisienne', cursive;
    color: ${props => props.color};
`;

export const HR = styled.hr`
    border-bottom: ${props => props.borderBottom};
`;

export const DateOfWedding = styled.h3`
    font-family: 'Libre Baskerville', serif;
    font-weight: 700;
    text-align: center;
    font-size: 24px;
    color: ${props => props.color};
`;

export const Title = styled.h1`
    font-size: 38px;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 5px;
    font-family: 'Patrick Hand SC', cursive;
`;

export const SmallTitle = styled.h1`
font-size: 28px;
text-transform: uppercase;
font-weight: 900;
letter-spacing: 5px;
font-family: 'Patrick Hand SC', cursive;
`;

export const listItem = styled.li`
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.color}
`;

export const Countdown = styled.p`
    font-size: 20px;
    font-family: 'Libre Baskerville', serif;
    font-weight: 700;
    color: ${props => props.color};
`