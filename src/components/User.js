import React, { Component } from 'react'
import PropTypes from 'prop-types';
import UserConsumer from '../context';
import axios from 'axios';

class User extends Component {
   
    static defaultProps = {
        name: "Bigi Yok",
        salary: "Bilgi Yok",
        department: "Bilgi Yok"
    }

    constructor(props){
        super(props)
        this.state = {
            isVisible: false
        }
        
        

    }

    onClickEvent = (e) => {
                this.setState({
                    isVisible : !this.state.isVisible
                })
        }

    onDeleteUser = async (dispatch,e) => {
        const {id} = this.props;
        // Delete Request
        await axios.delete(`http://localhost:3002/users/${id}`)
        // Consumer Dispatch
        dispatch({type: "DELETE_USER", payload: id})
    }


    render() {

        // Destructing 
        const {name, department, salary} = this.props;
        const {isVisible} = this.state;
        return( <UserConsumer>{
            value => {
                const {dispatch} = value;
                return (
            <div className="col md8 mb-4">
                <div className="card" style ={isVisible? {backgroundColor: "#FFE39F"} : null}>
                    <div  className="card-header d-flex justify-content-between">
                        <h4 
                            onClick={this.onClickEvent}
                            className="d-inline" >{name}</h4>
                        <i 
                            className="fas fa-trash-alt" 
                            style={{cursor: "pointer"}}
                            onClick={this.onDeleteUser.bind(this, dispatch)}
                            ></i>
                    </div>
                    { isVisible ? 
                    <div className="card-body">
                        <p className="card-text">Department: {department}</p>
                        <p className="card-text">Salary: {salary}</p>
                    </div>
                     : null }
                   
                </div>
            </div>
        )
            }}
        </UserConsumer>
        ) 
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default User;