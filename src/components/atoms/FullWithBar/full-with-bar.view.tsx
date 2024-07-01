// FullWidthYellowBar.tsx
import React from 'react';
import { YellowBar } from './full-with-bar.styles';

type FullWidthYellowBarProps = {
  marginLeft?: string;
};

export const FullWidthYellowBar: React.FC<FullWidthYellowBarProps> = ({ marginLeft }) => {
  return <YellowBar marginLeft={marginLeft} />;
};

