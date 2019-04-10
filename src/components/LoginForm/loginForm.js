import React, { Component } from 'react';
import { login } from '../../API/user';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        // this.loginHandler = this.loginHandler.bind(this);
    }
    loginHandler(e) {
        

            e.preventDefault();
            const { userName: { value: userName }, password: { value: password } } = e.target.elements;
            console.log(userName, password);
            const res = login({ userName, password });
            // alert("Login Successfuly");
            this.props.history.push('/allproduct')
       
    }
    render() {
        return (
            <>
                  <div className="add-product container">
                <form onSubmit={(e)=>this.loginHandler(e)} >
                    <input className="form-control" placeholder="name" name="userName" type="text"></input><br /><br/>
                    <input className="form-control" placeholder="password" name="password" type="password"></input><br/>
                    <button className="btn btn--primary" type="submit">login</button>
                </form>
                </div>
            </>
        )
    }
}
export default LoginForm;