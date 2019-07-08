import React, { Component } from 'react'
import User from './User';
import UserConsumer from '../context';

class Users extends Component {


    render() {
        
        return(
            <UserConsumer>
            {
                value => {
                const {users} = value;
                    return (
                    <div>
                    {users.map (user => {/*!!!!!!!!ADD_USER!!!!!!!*/ 
                        return (
                            <User 
                                key = {user.id}
                                id = {user.id}  
                                name = {user.name}
                                department = {user.department}
                                salary = {user.salary}
                            />
                                )
                        })
                    }
                    </div>
                    )
                }
            }
            </UserConsumer>
        )
       
    }
}

export default Users;
