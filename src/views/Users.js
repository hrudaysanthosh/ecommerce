import { useState, useEffect } from 'react';
import axios from 'axios';

import User from '../components/User';

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            setUsers(response.data);
        }).catch(error => {

        });
    }, []);
    const deleteUser = (index) => {
        const filteredUsers = users.filter((user, i) => i !== index);
        setUsers(filteredUsers);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h2 className="my-2 text-center text-primary">Users</h2>
                    <div className="row">
                        {users.map((user, index) => (
                            <div className="col-sm-4">
                                <User user={user} index={index} deleteUser={deleteUser}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users;