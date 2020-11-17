import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useSelector, useDispatch} from 'react-redux';
import { createTodo } from '../redux/actions/todos';

export default function AddToDo() {
    const [show, setShow] = useState(false);
    const user = useSelector(state => state.user.user);

    
    const dispatch = useDispatch();
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const PRIORITY_TO_NUM = {
      'Low': 1,
      'Medium': 2,
      'High': 3
    }

    

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            priority: 'Low',
            completed: false,
            user: ''
        },
        validationSchema: Yup.object({
            title: Yup.string()
            .required('Required'),
            description: Yup.string()
            .required('Required'),
            priority: Yup.string()
            .required('Required'),
        }),
        onSubmit: values => {
            values.priority = PRIORITY_TO_NUM[values.priority];

            const userLink = process.env.REACT_APP_BASE_API_URL + "users/" + user.id + "/";
            values.user = userLink;

            dispatch(createTodo(values));

            handleClose();
        },
    });
  
    return (
      <>
        <Button variant="primary" size='sm' onClick={handleShow} style={{'backgroundColor':'rgb(86,140,199)', 'borderColor':'rgb(86,140,199)'}}>
          Add item
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new ToDo item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Insert Title..." 
                    required
                    id="title"
                    {...formik.getFieldProps('title')}
                />
                {formik.touched.title && formik.errors.title ? (
                                    <div style={{'color':'red'}}>*{formik.errors.title}</div>
                                ) : null}
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    id="description"
                    {...formik.getFieldProps('description')}
                />
                {formik.touched.description && formik.errors.description ? (
                                    <div style={{'color':'red'}}>*{formik.errors.description}</div>
                                ) : null}
            </Form.Group>
            <Form.Group>
                <Form.Label>Priority</Form.Label>
                <Form.Control 
                    as="select"
                    required
                    id="priority"
                    placeholder="Choose"
                    {...formik.getFieldProps('priority')}
                >
                    <option disabled>Choose</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </Form.Control>
                {formik.touched.priority && formik.errors.priority ? (
                                    <div style={{'color':'red'}}>*{formik.errors.priority}</div>
                                ) : null}
            </Form.Group>
            
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={formik.handleSubmit} >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }