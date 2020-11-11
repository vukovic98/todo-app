import React, {useState} from 'react';
import {Col, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function SignUp() {

    const [user, setUser] = useState({
        'first_name':'',
        'last_name':'',
        'email':'',
        'password':'',
        'username':''
    });

    const submitUser = () => {
        console.log('clicked');
    }


    return(
        <div class="Signup" >
                <Form 
                    onSubmit={submitUser}
                    as={Col} 
                    className="col-md-4 mr-auto ml-auto mt-5 shadow-lg pl-5 pr-5 rounded pt-5 pb-5" 
                    style={{'backgroundColor':'rgb(245,247,248)'}}
                >
                        <h3 className="text-left mb-4">Create Your Account</h3>
                        <Form.Row className="text-left">
                            <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                required
                                placeholder="Enter First Name" 
                                name="user[first_name]"
                                value={user.first_name}
                                onChange={(e) => setUser({...user, first_name: e.target.value})}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="text-left">
                            <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                required
                                placeholder="Enter Last Name" 
                                name="user[last_name]"
                                value={user.last_name}
                                onChange={(e) => setUser({...user, last_name: e.target.value})}
                            />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row  className="text-left">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                required
                                placeholder="Enter email" 
                                name="user[email]"
                                value={user.email}
                                onChange={(e) => setUser({...user, email: e.target.value})}
                            />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row  className="text-left">
                            <Form.Group as={Col} controlId="formGridUserName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                type="text" 
                                required
                                placeholder="Enter username" 
                                name="user[username]"
                                value={user.username}
                                onChange={(e) => setUser({...user, username: e.target.value})}
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
                                name="user[password]"
                                value={user.password}
                                onChange={(e) => setUser({...user, password: e.target.value})}
                            />
                            </Form.Group>
                        </Form.Row>

                        <Button 
                            style={{'backgroundColor':'rgb(86,140,199)', 'borderColor':'rgb(86,140,199)'}} 
                            size="lg" 
                            type="submit" 
                            className="mt-4"
                            block 
                        >
                            Sign Up
                        </Button>
                </Form>
                <div className="mt-2">
                    <span style={{'color':'rgb(152,188,227)'}}>Have an account?   </span>
                    <Link to={'login'}><span className="text-white">Sign In!</span></Link>
                </div>
        </div>
    );
}