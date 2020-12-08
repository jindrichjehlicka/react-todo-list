import React from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "context/modal-context";
import styles from 'components/Modal/Modal.module.scss';

const Modal = () => {
    let {modalProps, isOpen} = React.useContext(ModalContext);
    if (isOpen) {
        return ReactDOM.createPortal(
            <div className={styles.Modal + ' modal'} role="dialog" style={{display: "block"}} id={'modalWrapper'} onClick={(e)=>console.log(e)}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{modalProps.title}</h5>
                            <button
                                onClick={modalProps.onCancel}
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true"
                                >&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {modalProps.message}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={modalProps.onConfirm}>Save
                                changes
                            </button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={modalProps.onCancel}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            ,
            document.querySelector("#modal-root") as any
        );
    } else return null;
};

export default Modal;


