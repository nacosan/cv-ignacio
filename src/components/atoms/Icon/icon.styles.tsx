import styled from 'styled-components';

export const IconContainer = styled.div<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  svg {
    width: 100%;
    height: 100%;
  }
`;
