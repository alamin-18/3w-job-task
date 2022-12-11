import React from 'react';
import { Dropdown, DropdownButton, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaWallet } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { ImUser } from "react-icons/im";
import Navbar from 'react-bootstrap/Navbar';



import './Menubar.css';
import NavbarModal from './../../NavbarModal/NavbarModal';
import { Link } from 'react-router-dom';

const Menubar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className='container'>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" className='text-parple'>Faucets</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form.Select className='rounded-1 ' style={{ width: '20%' }}  aria-label="Default select example">
              <option><img src="" alt="" /> Ethereum Rinkeby</option>
              <option value="1"> Arbitrum Rinkeby</option>
              <option value="2">Avalanche Fuji</option>
              <option value="3">BNB Chain Testnet</option>
            </Form.Select>

            <>
              <Button className="rounded-1 wallet-button ms-2 fw-semibold"
                variant="outline-secondary ml-2" onClick={() => setModalShow(true)}>
                <FaWallet></FaWallet> Connect your wallet
              </Button>


              <NavbarModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              >

              </NavbarModal>
            </>
            <DropdownButton  className='ms-2' id="dropdown-item-button" variant='none' title={<ImUser></ImUser>}>
              <Dropdown.ItemText></Dropdown.ItemText>
              <Dropdown.Item as="button"><Link to='login' className='text-secondary text-decoration-none font '>Log In</Link></Dropdown.Item>
              <Dropdown.Item as="button"><Link to='singup' className='text-secondary text-decoration-none font '>Sing Up</Link></Dropdown.Item>
              <Dropdown.Item as="button"><Link to='faq' className='text-secondary text-decoration-none font '>FAQ</Link></Dropdown.Item>
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;