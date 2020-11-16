import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useSelector, useDispatch} from 'react-redux';
import { createTodo, editTodo } from '../redux/actions/todos';

export default function EditToDo({todo}) {
    const [show, setShow] = useState(false);
    const user = useSelector(state => state.user.user);
    
    const dispatch = useDispatch();
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    

    const formik = useFormik({
        initialValues: {
            id: todo.id,
            title: todo.title,
            description: todo.description,
            priority: todo.priority,
            completed: todo.completed,
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
            if(values.priority === 'Low') values.priority = 1;
            if(values.priority === 'Medium') values.priority = 2;
            if(values.priority === 'High') values.priority = 3;
            console.log(values);

            const userLink = "http://127.0.0.1:8000/users/" + user.id + "/";
            values.user = userLink;


            dispatch(editTodo(values));

            handleClose();
        },
    });
  
    return (
      <>
        <Button variant="primary" size='sm' onClick={handleShow} style={{'backgroundColor':'rgb(86,140,199)', 'borderColor':'rgb(86,140,199)'}}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit ToDo item</Modal.Title>
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
                    {...formik.getFieldProps('priority')}
                >
                    <option defaultValue>Choose</option>
                    <option value='1'>Low</option>
                    <option value='2'>Medium</option>
                    <option value='3'>High</option>
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