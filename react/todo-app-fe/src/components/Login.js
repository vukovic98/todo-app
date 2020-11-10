import React, {useState} from 'react';
import {Col, Form, Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Login() {

    const [logData, setLogData] = useState({
        'username': '',
        'password':''
    });

    const loginUser = () => {
        console.log('clicked');
    }

    return(
        <div className="Login">
            <Form onSubmit={loginUser} as={Col} className="col-md-4 mr-auto ml-auto mt-5 shadow-lg pl-5 pr-5 rounded pt-5 pb-5" style={{'backgroundColor':'rgb(245,247,248)'}}>
                        <h3 className="text-left mb-4">Log In</h3>
                        
                        <Form.Row  className="text-left">
                            <Form.Group as={Col} controlId="formGridUserName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter username" 
                                required
                                name="logData[username]"
                                value={logData.username}
                                onChange={(e) => setLogData({...logData, username: e.target.value})}
                            />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="text-left">
                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter Password" 
                                required
                                name="logData[password]"
                                value={logData.password}
                                onChange={(e) => setLogData({...logData, password: e.target.value})}
                            />
                            </Form.Group>
                        </Form.Row>

                    

                        <Button style={{'backgroundColor':'rgb(86,140,199)', 'borderColor':'rgb(86,140,199)'}} size="lg" type="submit" block className="mt-4">
                            Sign In
                        </Button>
                </Form>
                <div className="mt-2">
                    <span style={{'color':'rgb(152,188,227)'}}>Don't have an account?   </span>
                    <Link to={''}><span className="text-white">Sign Up!</span></Link>
                </div>
        </div>
    );
}