import React from 'react';
import {Col, Form, Button} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {loginUser} from '../redux/actions/users'

export default function Login() {

    const dispatch = useDispatch();
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
            .required('Required'),
            password: Yup.string()
            .required('Required')
        }),
        onSubmit: values => {
            dispatch(loginUser(values));
        },
    });

    return(
        <div className="Login">
            <Form as={Col} className="col-md-4 mr-auto ml-auto mt-5 shadow-lg pl-5 pr-5 rounded pt-5 pb-5" style={{'backgroundColor':'rgb(245,247,248)'}}>
    <h3 className="text-left mb-4">Log In</h3>
                        
                        <Form.Row  className="text-left">
                            <Form.Group as={Col}>
                                <Form.Label>Username</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    id="username"
                                    placeholder="Enter username" 
                                    {...formik.getFieldProps('username')}
                                />
                                {formik.touched.username && formik.errors.username ? (
                                    <div style={{'color':'red'}}>*{formik.errors.username}</div>
                                ) : null}
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="text-left">
                            <Form.Group as={Col}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Enter Password" 
                                    id="password"
                                    {...formik.getFieldProps('password')}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div style={{'color':'red'}}>*{formik.errors.password}</div>
                                ) : null}
                            </Form.Group>
                        </Form.Row>

                    

                        <Button onClick={formik.handleSubmit} type="submit" style={{'backgroundColor':'rgb(86,140,199)', 'borderColor':'rgb(86,140,199)'}} block  className="mt-4">
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