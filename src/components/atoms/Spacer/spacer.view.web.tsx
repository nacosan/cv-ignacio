// Spacer.tsx
import React from 'react';
import { SpacerProps } from './spacer.types';
import { SpacerContainer } from './spacer.styles.web';

export const Spacer: React.FC<SpacerProps> = ({ size = 'M', isDebugging, direction = 'vertical' }) => {
  return (
    <SpacerContainer
      size={size}
      isDebugging={isDebugging}
      direction={direction}
    />
  );
};
