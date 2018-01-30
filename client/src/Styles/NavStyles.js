import styled from 'styled-components';

export const NavLinks = styled.ul`
list-style: none;
margin: 0;
padding: 20px;
text-align: center;
font-family: 'Bromello', cursive !important;
`;

export const NavLink = styled.span`
padding: 5px 8px;
padding-bottom: 20px;
font-size: 18px;
border-radius: 3px;
transition: all 0.3s ease;
color: #3e3e3e;
margin: 5px;
text-decoration: none;
background-color: ${props => props.color};
font-family: 'Bromello', cursive !important;
`;

export const BackToTop = styled.button`
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    background-color: #3e3e3e;
    text-align: center;
    max-width: 300px;
`;
