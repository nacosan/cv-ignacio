import styled from 'styled-components';
export const IconGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  text-align: center;
  color: white;
  margin-top: 20px;
`;

export const IconLabel = styled.div`
  margin-top: 8px;
  color: white;
  font-size: 18px; 
  font-weight: bold;
`;