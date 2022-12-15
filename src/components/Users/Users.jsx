import React from "react";
import styles from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taras_Shevchenko_selfportrait_oil_1840.jpg/175px-Taras_Shevchenko_selfportrait_oil_1840.jpg',
                    followed: false,
                    fullName: 'Vladislav',
                    status: 'Boss',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 2,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taras_Shevchenko_selfportrait_oil_1840.jpg/175px-Taras_Shevchenko_selfportrait_oil_1840.jpg',
                    followed: true,
                    fullName: 'Alex',
                    status: 'Fullstack',
                    location: {city: 'New York', country: 'USA'}
                },
                {
                    id: 3,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taras_Shevchenko_selfportrait_oil_1840.jpg/175px-Taras_Shevchenko_selfportrait_oil_1840.jpg',
                    followed: false,
                    fullName: 'Patrik',
                    status: 'Middle',
                    location: {city: 'Brno', country: 'Czech Republic'}
                },
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{u.fullName}</div><div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
            </div>)
        }
    </div>
}

export default Users;