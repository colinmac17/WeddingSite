import styled from 'styled-components';

export const NavLinks = styled.ul`
list-style: none;
margin: 0;
padding: 0;
text-align: center;
`;

export const NavLink = styled.span`
padding: 5px 8px;
border-radius: 3px;
transition: all 0.3s ease;
color: #FFF;
margin: 10px;
text-decoration: none;
background-color: ${props => props.color};
`;
