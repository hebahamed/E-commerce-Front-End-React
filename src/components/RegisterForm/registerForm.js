import React, { Component } from 'react';
import { register, login} from '../../API/user';

class RegisterForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
           users:[]
        }
    }

    registerHandler = async (e)=>{
        e.preventDefault();
        const { userName:{value:userName} , email:{value:email}  , password :{value:password}} = e.target.elements;
        console.log(userName,email,password);
        const res = await register({userName,email,password});
        

        
    }
    render(){
        if(localStorage.getItem('token')===null&& localStorage.getItem('useris')===null)
        {
            return(
                <>
                <div className="formMe">
                 <div className="add-product container">
                   <form onSubmit={this.registerHandler}>
                   <input className="form-control" placeholder="name" name="userName" type="text"></input><br/><br/>
                   <input className="form-control" placeholder="email" name="email" type="text"></input><br/><br/>
                   <input className="form-control" placeholder="password" name="password" type="password"></input>
                   <button className="btn btn--primary" type="submit">Register</button>
                   </form>
                   </div>
                   </div>
                
                </>
            )
        }
        else{
            
            return(<div className="rl"><h4> You Are Registerd In Our Website</h4></div>)
    }
}
}
export default RegisterForm;