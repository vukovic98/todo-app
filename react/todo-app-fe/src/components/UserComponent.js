import React, { useState } from 'react';
import {useSelector} from 'react-redux';

export default function UserComponent() {

    const user = useSelector(state => state.user.user);
    
    return (
        <div>
            <img className="mb-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png"
                height= '70'
                width='70'
                ></img> <br/>
            {user === undefined ? <p>Loading...</p>
                :
                <div>
            <p>{user.first_name} {user.last_name}</p>
            <p className="text-muted"><i>{user.username}</i></p></div>
            }
        </div>
    );
}