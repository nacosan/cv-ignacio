import React, { useEffect } from 'react';
import { ModalOverlay, ModalContent } from './modal.styles';
import { Icon } from '../Icon';
import { ModalProps } from './modal.types';

export const Modal: React.FC<ModalProps> = ({ isVisible, title, iconName, description, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            document.body.classList.add('blurred');
        } else {
            document.body.classList.remove('blurred');
        }

       
        return () => {
            document.body.classList.remove('blurred');
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <ModalOverlay>
            <ModalContent>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Icon name={iconName} size="L" />
                    <h2>{title}</h2>
                </header>
                <div className="modal-body">
                    <p>{description}</p>
                </div>
            </ModalContent>
        </ModalOverlay>
    );
};
