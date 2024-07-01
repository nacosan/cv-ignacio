import { IconMapping } from './icon.theme';
import React from 'react';
import { IconContainer, IconWrapper } from './icon.styles';
import { IconProps } from './icon.types';

export const Icon = ({ name, size = 'M' }: IconProps) => {  
  const IconComponent = IconMapping({ name, size })[name];
  return (
    <IconContainer size={size}> 
      <IconWrapper>{IconComponent}</IconWrapper>
    </IconContainer>
  );
};
