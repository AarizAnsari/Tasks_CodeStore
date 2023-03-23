
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

document.getElementById('signinbtn').addEventListener("click",checkUser);

async function checkUser(){
    const username = document.getElementById.value;
    const password = document.getElementById.value.bcrypt;
    const existUser =  await fetch(`localhost:4001/check${username}&${password}`)
    .then(res => {return res.status});
    if(existUser == 200){
        document.getElementById('warn').innerHTML = "Sign In Successful";
    }
    else{
        await fetch('localhost:4001/create',{
            body:{
                "username":username,
                "password":password.bcrypt,
                "token":jwt.sign({ 'username': username,"password":password }, 'Uk234517', function(err, token) {
                    return token
                  })
            }
        });
        document.getElementById('warn').innerHTML = "New User Created";
    }
}