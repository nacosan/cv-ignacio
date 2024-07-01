import styled from 'styled-components';

const goldenYellow = '#ffd700';

export const CVContainer = styled.div`
  background-color: black;
  color: ${goldenYellow};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 80px 20px 20px 20px;
`;

export const CVTitle = styled.h1`
  color: ${goldenYellow};
  margin-bottom: 20px;
`;

export const PDFViewerContainer = styled.div`
  padding: 20px;
  background-color: black;
  display: flex; 
  align-items: center; 
  justify-content: center; 
`;

export const ImageAndIconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;

  a {
    color: white; 

    &:hover {
      color: ${goldenYellow}; 
    }
  }
`;
