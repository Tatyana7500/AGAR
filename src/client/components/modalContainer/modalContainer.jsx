import Modal from '../../libs/modal/Modal';
import React from 'react';
import { ModalWrapper } from './styledComponent';

const ModalContainer = props => {
    const {
        modalText,
        isModalOpen,
        hideModal
    } = props;

    return isModalOpen ? (
        <Modal onClick = { hideModal }>
            <ModalWrapper>
                <ModalWrapper.p> { modalText } </ModalWrapper.p>
            </ModalWrapper>
        </Modal>
    ) : null;
};

export default React.memo(ModalContainer);