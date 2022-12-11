import React from 'react';
import { Form, } from 'react-bootstrap';

import { NavLink, Outlet } from 'react-router-dom';
import { HiExclamationTriangle } from "react-icons/hi2";
import './MainSection.css'
import ReCAPTCHA from 'react-google-recaptcha';
const MainSection = () => {
    const onChange = (value) => {
        console.log("Captcha value:", value);
    }
    const navActive = ({ isActive }) => {
        return {
            fontWeight: isActive ? '500' : 'normal',
            backgroundColor: isActive ? "#0000ff" : '#f5f7fd',
            padding: "8px 10px",
            textDecoration: 'none',
            color: isActive ? 'white' : 'black'
        }
    }
    return (
        <div className='bg-main p-4'>
            <div className='container'>
                <h1 className='text-color'>Request testnet LINK</h1>
                <p className='w-50 header-text'> Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</p>
                <div className='bg-white p-4 '>
                    <p className='main-section-text p-2'><HiExclamationTriangle></HiExclamationTriangle>Your wallet is connected to <strong>Ethereum Kovan</strong>, so you are requesting <strong>Ethereum Kovan</strong> Link/ETH.</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-color'>Wallet Address</Form.Label>
                            <Form.Control style={{ width: '37%' }} type="email" placeholder="Wallet Address" />
                        </Form.Group>

                        <div className='d-flex'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='text-color'>Request Type</Form.Label>
                                <div className="d-flex ">
                                    <Form.Control
                                        name="requestType"
                                        className="w-75 me-2"
                                        type="text"
                                        disabled
                                        value={"20 Test Link"}
                                        placeholder="20 Test Link"
                                    />
                                    <Form.Control
                                        name="amount"
                                        className="w-75 ms-2"
                                        type="text"
                                        disabled
                                        value={"0.5 ETH"}
                                        placeholder="0.5 ETH"
                                    />
                                </div>
                            </Form.Group>
                        </div>
                        <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onChange}
                        />,
                        <button className='btn-send py-2 px-3 mb-2'>Send Request</button>

                    </Form>
                    <div className='mt-3'> 
                        <h5 className='mb-4'>Request History</h5>
                        <div>
                            <NavLink style={navActive} to='eth'>ETH Transaction History</NavLink>
                            <NavLink style={navActive} className='ms-2' to='testlink'>TestLink Transaction History</NavLink >
                        </div>
                        <Outlet></Outlet>

                    </div>
                </div>
            </div >

        </div >
    );
};

export default MainSection;