import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  background-color: black;
  color: white;
  padding: 10px 20px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  border-bottom: 1px solid grey;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.h2`
  margin: 0 10px;
  color: yellow;

  a {
    color: #ffd700;
    text-decoration: none;
    background: -webkit-linear-gradient(45deg, #ffd700, #f8ff00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  a:hover {
    color: #ffcc00;
  }
`;

export const LanguageSelector = styled.select`
  padding: 5px 25px;
  margin-left: auto;
  margin-right: 25px; 
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
`;
