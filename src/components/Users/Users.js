import React, { useEffcet } from 'react';

import './Users.css';

const Users = (props) => {


    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoURL: 'https://www.kino-teatr.ru/acter/album/325783/847606.jpg', followed: false, fullName: 'Dmitriy', status: 'Im a boss', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, photoURL: 'https://www.kino-teatr.ru/acter/album/325783/847606.jpg', followed: true, fullName: 'Dmitriy2', status: 'Im a boss', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 3, photoURL: 'https://www.kino-teatr.ru/acter/album/325783/847606.jpg', followed: false, fullName: 'Dmitriy3', status: 'Im a boss', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 4, photoURL: 'https://www.kino-teatr.ru/acter/album/325783/847606.jpg', followed: true, fullName: 'Dmitriy4', status: 'Im a boss', location: { city: 'Minsk', country: 'Belarus' } }
        ])
    }


    return <div>
        {
            props.users.map(u => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img className="userPhoto" src={u.photoURL} />
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
                            <div> {u.fullName} </div>
                            <div> {u.status} </div>
                        </span>
                        <span>
                            <div> {u.location.country} </div>
                            <div> {u.location.city} </div>
                        </span>
                    </span>
                </div>
            ))
        }
    </div >
}

export default Users;