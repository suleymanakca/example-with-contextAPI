import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from '../context';
import axios from 'axios';


const Animation = posed.div({
    visible: {  opacity: 1,
                applyAtStart: {
                    display: "block"
                }
    },
    hidden : {  opacity: 0,
                applyAtEnd: {
                    display: "none"
                }      
        }
});

class AddUser extends Component {
    constructor(){
        super()
        this.state={
            isVisible :true,
            name:"",
            department:"",
            salary:"",
        }
        
        
    }

    changeVisibility = (e) =>{
        this.setState({
            isVisible : !this.state.isVisible
        })
    }

    changeInput = (e) =>{
        this.setState({
            [e.target.name] :e.target.value 
        })
    }
    addUser = async (dispatch,e) =>{
        e.preventDefault();
        const {name, department, salary} = this.state;

        const newUser = {
            name,
            salary,
            department
        }
        const response = await axios.post("http://localhost:3002/users",newUser);

        dispatch({type :" ADD_USER", payload:response.data});
    }
   
    render() {
        const {isVisible, name, salary, department} = this.state;

        return<UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (  
                        <div className = "col-md-8 mb-4" >
                        <button onClick ={this.changeVisibility} className="btn btn-dark btn-block mb-2">{isVisible ? "Hide Form": "Show Form"}</button>
                            <Animation pose = {isVisible ? "visible " : "hidden"}>
                            <div className="card">
                                <div className="card-header">
                                    <h4>Add User Form</h4>
                                    <div className="card-body">
                                        <form onSubmit = {this.addUser.bind(this,dispatch)}>
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input type="text"
                                                        name="name"
                                                        id="name"
                                                        placeholder="Enter name"
                                                        className="form-control"
                                                        value={name}
                                                        onChange={this.changeInput}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="department">Department</label>
                                                <input type="text"
                                                        name="department"
                                                        id="department"
                                                        placeholder="Enter department"
                                                        className="form-control"
                                                        value={department}
                                                        onChange={this.changeInput}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="salary">Salary</label>
                                                <input type="text"
                                                        name="salary"
                                                        id="salary"
                                                        placeholder="Enter salary"
                                                        className="form-control"
                                                        value={salary}
                                                        onChange={this.changeInput}
                                                />
                                            </div>
                                            <button className="btn btn-danger btn-block" type="submit"> Add User</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            </Animation>
                        </div>
                    )
                                }
                            }
        </UserConsumer>
        
      
    }
}

export default AddUser;