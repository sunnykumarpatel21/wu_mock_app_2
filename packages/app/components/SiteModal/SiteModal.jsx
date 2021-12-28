import { Modal, Button  } from 'react-bootstrap';

const SiteModal = ({ showModal, showFooter, modalTitle, modalBody, handleClose}) => {
	return (
        <Modal centered show={showModal} onHide={()=> handleClose(null)}>
            <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {modalBody}
            </Modal.Body>
            {showFooter &&
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            }
        </Modal>
	);
};

export default SiteModal;
