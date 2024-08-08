import { ReactNode, useEffect, useRef } from 'react';
import { Dialog, Header } from './styles';
import { IconClose } from '../Icons';

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode[] | ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialogNode = dialogRef.current;

        if (isOpen) {
            dialogNode?.showModal();
        } else {
            dialogNode?.close();
        }

        const handleClose = () => onClose();

        dialogNode?.addEventListener('close', handleClose);

        return () => {
            dialogNode?.removeEventListener('close', handleClose);
        };
    }, [isOpen, onClose]);

    return (
        <Dialog ref={dialogRef}>
            <Header>
                <button onClick={() => dialogRef?.current?.close()}>
                    <IconClose />
                </button>
            </Header>
            {children}
        </Dialog>
    );
};

export default Modal;