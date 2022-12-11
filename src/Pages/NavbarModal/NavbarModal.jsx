import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import walletconnect from '../../images/WalletConnect-Logo.jpg'
import metamask from '../../images/metamask.png'

const NavbarModal = (props) => {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Connect your wallet
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <div className='d-flex justify-content-center align-items-center'>
                    <div>
                    <img src={metamask} className='img-fluid w-70' alt="" />
                    <h1>Meta Mask</h1>
                    </div>
                    <div>
                    <img src={walletconnect} className='img-fluid w-75' alt="" />
                    <h1>wallet connect</h1>
                    </div>
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default NavbarModal;