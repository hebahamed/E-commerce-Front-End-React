const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';
const axios = require('axios')
console.log(baseUrl);
module.exports={

    register(user){
     axios.post(`${baseUrl}/users/`, user).then(res=>res.data)
    },
    login(credintial){
        axios.post(`${baseUrl}/users/login`, credintial).then(res=>{
             localStorage.setItem('token',res.data.token);
             localStorage.setItem('userid',res.data.user._id);
        })
    }
    ,
    getAllProductsFromUser(){
          axios.get(`${baseUrl}/users/:userId/`).then(res => {console.log(res.data)});
         
    }
}