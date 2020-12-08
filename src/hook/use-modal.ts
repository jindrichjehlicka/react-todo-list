import React from "react";

export interface IModalProps {
    title: string,
    message: string | JSX.Element;
    onConfirm: () => void;
    onCancel: () => void;
    onBackdropClick: () => void;
}

//todo: move
const initialState: IModalProps = {
    title: '',
    message: '',
    onConfirm: () => {
    },
    onCancel: () => {
    },
    onBackdropClick: () => {
    }
};

const useModal = () => {
    let [isOpen, setIsOpen] = React.useState<boolean>(false);
    let [modalProps, setModalProps] = React.useState<IModalProps>(initialState);

    let handleModal = (content?: IModalProps) => {
        setIsOpen(!isOpen);
        if (content) {
            setModalProps(content);
            setIsOpen(true);
        } else {
            setIsOpen(false);
            setModalProps(initialState);
        }
    };

    return {isOpen, handleModal, modalProps};
};

export default useModal;
