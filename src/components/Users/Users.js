import React from 'react';
import * as axios from 'axios';

import './Users.css';

const Users = (props) => {


    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => {
                props.setUsers(res.data.items)
            })
    }


    return <div>
        {
            props.users.map(u => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img
                                className="userPhoto"
                                src={u.photos.small != null ? u.photos.small : 'https://www.kino-teatr.ru/acter/album/325783/847606.jpg'}
                            />
                        </div>
                        <div>
                            {
                                u.followed ?
                                    <button onClick={() => props.unFollow(u.id)}>UnFollow</button> :
                                    <button onClick={() => props.follow(u.id)}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div> {u.name} </div>
                            <div> {u.status} </div>
                        </span>
                        <span>
                            {/* <div> {u.location.country} </div>
                            <div> {u.location.city} </div> */}
                        </span>
                    </span>
                </div>
            ))
        }
    </div >
}

export default Users;