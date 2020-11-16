import React, {useEffect} from 'react';
import { Jumbotron, Col, Button } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { userData } from '../redux/actions/users';
import {getUserTodos} from '../redux/actions/todos';
import ToDoItem from './ToDoItem';
import UserComponent from './UserComponent';
import AddToDo from './AddToDo';

export default function ToDoPage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userData());
        dispatch(getUserTodos());
    },[]);

    const todos = useSelector(state => state.todos.todos);

    return (
        <div className="ToDoPage mt-3 row">
            <div className="col-md-2 float-left"></div>
            <Jumbotron as={Col} className="col-md-8 float-left pt-3">
                <div className="text-right mb-3">
                    <AddToDo />
                </div>
                <div className="col-md-3 border-right float-left">
                    <UserComponent/>
                </div>
                <div className="col-md-9 float-left">
                    {todos.length ===0 ? (<div className="pt-3">No Items Created</div>) : (todos.map((todo) => {
                        return <ToDoItem key={todo.title} todo={todo} />
                    }))}
                </div>
                
            </Jumbotron>
            <div className="col-md-2 float-left"></div>
        </div>
    );
}