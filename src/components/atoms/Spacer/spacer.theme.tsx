import { TokenSize } from "styles/types";




const sizeToSpacerHeight: Record<TokenSize, string> = {
  XS: '10px',
  S: '12px',  
  M: '24px', 
  L: '36px', 
  XL: '72px'
};

export const getSize = (size: TokenSize): string => {
  return sizeToSpacerHeight[size] ?? sizeToSpacerHeight['M']; 
};
