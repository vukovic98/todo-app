import React from 'react';
import { Button, Badge } from 'react-bootstrap';
import '../index.css';
import {useDispatch} from 'react-redux';
import {deleteTodo, editTodo} from '../redux/actions/todos';
import EditToDo from './EditToDo';

export default function ToDoItem(props) {

    const dispatch = useDispatch();

    const completeTodo = () => {
        const newTodo = {...props.todo, completed: (!props.todo.completed)};
        dispatch(editTodo(newTodo));
    };

    return(
        <div className="ToDoItem text-left rounded pl-2 pr-3 mt-1 border-bottom row">
            <div className="col-md-1 text-right pt-4">
                <input type="checkbox" defaultChecked={props.todo.completed} onChange={() => completeTodo()}/><p className="text-muted small">Done</p>
            </div>
            <div className="col-md-7 pl-2">
                <p className="mb-0">{props.todo.title}</p>
                <p className="text-muted mb-2"><i>{props.todo.description}</i></p>
                {
                    props.todo.priority === '3' ? <Badge variant="danger" className="w-15 h-10"><p></p></Badge> :
                                    (props.todo.priority === '2' ? <Badge variant="warning" className="w-15 h-10"><p></p></Badge> 
                                    : <Badge variant="success" className="w-15 h-10"><p></p></Badge>)
                }
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2 pt-2 text-right">
                <EditToDo todo={props.todo}/>
            </div>
            <div className="col-md-1 pt-2 pl-1 text-right">
                <Button
                    variant='danger'
                    size='sm'
                    onClick={() => dispatch(deleteTodo(props.todo.id))}
                >Delete</Button>
            </div>
        </div>
    );
}