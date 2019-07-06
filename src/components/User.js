import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
    static defaultProps = {
        name: "Bigi Yok",
        salary: "Bilgi Yok",
        department: "Bilgi Yok"
    }
    render() {
        const {name, department, salary} = this.props;
        return (
            <div className="col md8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline">{name}</h4>
                        <i className="fas fa-trash-alt" style={{cursor: "pointer"}}></i>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{department}</p>
                        <p className="card-text">{salary}</p>
                    </div>
                </div>
            </div>
        )
    }
}
User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired
}

export default User;