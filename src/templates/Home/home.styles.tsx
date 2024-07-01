import styled from 'styled-components';

const goldenYellow = '#ffd700';

export const HomeContainer = styled.div`
  color: ${goldenYellow}; 
  background-color: black; 
  padding: 20px;
  min-height: 100vh;
`;

export const Layout = styled.div`
  width: 100%;
  margin: auto; 
`;

export const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 200px;
  row-gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: auto;
`;

export const Category = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
`;

export const Photo = styled.div`
  flex: 1;
`;

export const TextContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
`

export const TextSection = styled.div`
  width: 50%; 
  padding: 10px;
  flex: 1;
`;
