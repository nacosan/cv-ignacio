import { IconName } from "../Icon";

export interface ModalProps {
    isVisible: boolean;
    title: string;        
    iconName: IconName;  
    description: string;  
    onClose: () => void;
}
