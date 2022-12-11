import React from 'react';
import { Button,  Form, } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import {HiExclamationTriangle } from "react-icons/hi2";
import './MainSection.css'
const MainSection = () => {
    return (
        <div className='bg-main p-4'>
            <div className='container'>
                <h1 className='text-color'>Request testnet LINK</h1>
                <p> Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</p>
                <div className='bg-white p-4'>
                    <p className='main-section-text p-2'><HiExclamationTriangle></HiExclamationTriangle>Your wallet is connected to Ethereum Kovan, so you are requesting Ethereum Kovan Link/ETH.</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-color'>Wallet Address</Form.Label>
                            <Form.Control style={{ width: '50%' }} type="email" placeholder="Wallet Address" />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-color'>Request Type</Form.Label>
                            <Form.Control style={{ width: '25%' }} type="email" placeholder="Wallet Address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Wallet Address</Form.Label>
                            <Form.Control style={{ width: '25%' }} type="email" placeholder="Wallet Address" />
                        </Form.Group>
                        <button className='btn-send py-2 px-3'>Send Request</button>
                       
                    </Form>
                    <div>
                        <h4>Request History</h4>
                        <div>
                            <Button variant='outline-primary'><Link to='eth'>ETH Transaction History</Link></Button>
                            <Button variant='outline-primary'> <Link to='testlink'>TestLink Transaction History</Link ></Button>
                        </div>
                        <Outlet></Outlet>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainSection;