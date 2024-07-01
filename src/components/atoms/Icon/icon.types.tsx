import { IconBaseProps } from 'react-icons';
import { IconName as IconNameProp } from './icon.theme';

export type SizeIcon = 'XS' | 'S' | 'M' | 'L';
export interface IconProps extends IconBaseProps {
  name: IconNameProp;
  size?: SizeIcon;
}
