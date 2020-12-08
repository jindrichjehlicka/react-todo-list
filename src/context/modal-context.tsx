import React, { ReactNode } from "react";

import useModal, { IModalProps } from "hook/use-modal";
import Modal from "components/Modal/Modal";

interface IModalContext {
    handleModal: (component?: IModalProps) => void,
    isOpen: boolean,
    modalProps: IModalProps
}


let ModalContext: React.Context<IModalContext>;
let {Provider} = (ModalContext = React.createContext<IModalContext>({} as IModalContext));

interface IModalProvider {
    children: ReactNode
}

let ModalProvider = ({children}: IModalProvider) => {
    let {isOpen, handleModal, modalProps} = useModal();
    return (
        <Provider value={{isOpen, handleModal, modalProps}}>
            <Modal/>
            {children}
        </Provider>
    );
};

export { ModalContext, ModalProvider };
