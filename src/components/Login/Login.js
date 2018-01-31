import React from 'react';
import { Redirect, Router } from 'react-router'
import routes from '../../routes';
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : ''
    }
  }

    //Fonction de connexion
    login () {
        fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            //email: 'peter@klaven',
            //password: 'cityslicka'
            email : this.state.email,
            password : this.state.password
        })}).then(
            function(response) {
              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                  alert('Wrong login or pass ');
                return;
              }
        
              // Examine the text in the response
              response.json().then(function(data) {
                console.log(data);
                sessionStorage.setItem('token', data['token']);
                console.log(sessionStorage.getItem('token'));
                window.location.replace("./Home");
              });
            }
          )
          .catch(function(err) {
            console.log('Fetch Error :-S', err);
          });
    }
  //actualise la valeur de champ userEmail
  updateEmailValue(evt){
    this.state.email=(evt.target.value); 
  }
  //actualise la valeur de champ userPassword
  updatePassValue(evt){
    this.state.password=(evt.target.value);  
  }
    render() {
      return (
        <div class="container">
        <div class="row">
            <div class="col-md-offset-5 col-md-3">
                <div class="form-login">
                <h4>Welcom in VOD</h4>
                <input type="text" id="userEmail" onChange={this.updateEmailValue.bind(this)} class="form-control input-sm chat-input" placeholder="username" /><br/>
                <input type="text" id="userPassword" onChange={this.updatePassValue.bind(this)}  class="form-control input-sm chat-input" placeholder="password" /><br/>
                <div class="wrapper">
                <span class="group-btn">     
                    <a href="#" class="btn btn-primary btn-md" onClick={this.login.bind(this)}>login <i class="fa fa-sign-in"></i></a>
                </span>
                </div>
                </div>          
            </div>
        </div>
        </div>
      )
    }
  }

  export default Login;