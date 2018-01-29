import styled from 'styled-components';

export const MainTitle = styled.h1`
    font-size:56px;
    font-weight: 900;
    padding: 15px;
    font-family: 'Shorelines Script Bold', cursive;
    color: ${props => props.color};
`;

export const HR = styled.hr`
    border-bottom: ${props => props.borderBottom};
`;

export const DateOfWedding = styled.h3`
    font-family: 'Bromello';
    font-weight: 700;
    text-align: center;
    font-size: 24px;
    color: ${props => props.color};
`;

export const Title = styled.h1`
    font-size: 38px;
    font-weight: 900;
    letter-spacing: 5px;
    font-family: 'Bromello', cursive;
`;

export const SmallTitle = styled.h1`
font-size: 28px;
font-weight: 900;
letter-spacing: 5px;
font-family: 'Bromello', cursive;
`;

export const listItem = styled.li`
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.color}
    font-family: 'Bromello', cursive;
`;

export const Countdown = styled.p`
    font-size: 24px;
    font-family: 'Bromello', cursive;
    font-weight: 700;
    color: ${props => props.color};
`

export const DetailTitle = styled.span`
    font-weight: 900;
    text-decoration: underline;
`

export const RSVPMessage = styled.div`
    padding: 20px;
    background-color: ${props => props.background};
    border-radius: 5px;
    color: ${props => props.color};
    font-weight: 900;
`