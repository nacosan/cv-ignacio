import styled from 'styled-components';
import { getSize } from './spacer.theme';
import { SpacerProps } from './spacer.types';
import { TokenSize } from "../../../styles/types";


export const SpacerContainer = styled.div<SpacerProps>`
  background-color: ${({ isDebugging, theme }) =>
    isDebugging ? theme.debug.color : 'transparent'};
  ${({ direction, size = 'M' }) =>
    direction === 'vertical'
      ? `width: 100%; height: ${getSize(size as TokenSize)};` 
      : `height: 100%; width: ${getSize(size as TokenSize)};`}  
  display: block;
`;
