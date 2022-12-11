import React from 'react';
import { Button, Form, } from 'react-bootstrap';

import { Link, Outlet } from 'react-router-dom';
import { HiExclamationTriangle } from "react-icons/hi2";
import './MainSection.css'
import ReCAPTCHA from 'react-google-recaptcha';
const MainSection = () => {
    const onChange = (value) => {
        console.log("Captcha value:", value);
    }
    // const [checked, setChecked] = useState(false);
    // const [radioValue, setRadioValue] = useState('1');

    // const radios = [
    //     { name: 'Active', value: '1' },
    //     { name: 'Radio', value: '2' },
    //     { name: 'Radio', value: '3' },
    // ];
    return (
        <div className='bg-main p-4'>
            <div className='container'>
                <h1 className='text-color'>Request testnet LINK</h1>
                <p className='w-50'> Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</p>
                <div className='bg-white p-4 '>
                    <p className='main-section-text p-2'><HiExclamationTriangle></HiExclamationTriangle>Your wallet is connected to Ethereum Kovan, so you are requesting Ethereum Kovan Link/ETH.</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-color'>Wallet Address</Form.Label>
                            <Form.Control style={{ width: '35%' }} type="email" placeholder="Wallet Address" />
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
            <div>
                <h4>Request History</h4>
                <div>
                    <Button variant='outline-primary'><Link to='eth'>ETH Transaction History</Link></Button>
                    <Button variant='outline-primary'> <Link to='testlink'>TestLink Transaction History</Link ></Button>
                </div>
                <Outlet></Outlet>

            </div>
        </div>
            </div >

        </div >
    );
};

export default MainSection;