import React from 'react';
import {notifications} from '../utils/notifications';
import { factigisLogin } from '../services/login-service';
import cookieHandler from 'cookie-handler';
import Input from 'react-toolbox/lib/input';
import {Button, IconButton} from 'react-toolbox/lib/button';
import env from '../services/factigis_services/config';
import {Snackbar} from 'react-toolbox';

class LoginApp extends React.Component {
  constructor(){
    super();
    this.state = {
      errorTextLabel: 'Este campo es requerido',
      snackbarMessage: '',
      active: false,
      username: '',
      password: ''

    }
  }

  onClick(){
    var userValue = this.state.username;
    var passValue =  this.state.password;
    //If they dont put any username or password
    if (userValue=="" || passValue==""){
      notifications('Login incorrecto, intente nuevamente.', 'Login_Error', '.notification-login');
      return;
    }
    //For domain users
    if (userValue.includes('vialactea\\')){
      console.log("Trying to access REACT_FACTIGIS_DESA_DASHBOARD");
      factigisLogin(userValue, passValue);
      return;

    }else {
      console.log("Trying to access REACT_FACTIGIS_DESA_DASHBOARD");
      userValue =  'vialactea\\'+this.state.username;
      factigisLogin(userValue, passValue);
    }
  }

  componentWillMount(){
    localStorage.removeItem('token');
    cookieHandler.remove('myLetter');
    cookieHandler.remove('usrprfl');
    cookieHandler.remove('usrprmssns');
    cookieHandler.remove('wllExp');
    cookieHandler.remove('tkn');
  }

  componentDidMount(){
    //change the loginwall dinamically
    let randomPicNumber = Math.floor((Math.random() * 6) + 1);
    //********Cambiar randomPicSrc para test/prod*******
    //let randomPicSrc = "css/images/login_images/loginwall"+ randomPicNumber+ ".jpg"; //prod
    let randomPicSrc = env.CSSDIRECTORY+ "images/login_images/loginwall"+ randomPicNumber+ ".jpg";//desarrollo
  //  $('.login_wrapper').css("background-image", "url("+randomPicSrc+")");
  $('.login_wrapper_content').css("background-image", "url("+randomPicSrc+")").css('background-size','100% 100%');

  }

  handleKeyPress(target){
    if(target.charCode==13){

        this.onClick();

    }
  }
  handleSnackbarClick = () => {
     this.setState({active: false})
  };

  handleClick = () => {
   this.setState({active: true})
  };

  handleChange = (name, value) => {
     this.setState({...this.state, [name]: value});
  };

  render(){
  let src = env.CSSDIRECTORY + 'images/logo_factigis.png';
      return (

          <div className="login_wrapper_content">
            <div className="login_div">
            <img className="login_logo" src={src}></img>
            <Input className="login_input" type='text' label='Usuario' name='name' icon="person" value={this.state.username} onChange={this.handleChange.bind(this, 'username')} />
            <Input className="login_input" type='password' label='Contraseña' name='name' icon="lock" value={this.state.password} onChange={this.handleChange.bind(this, 'password')} onKeyPress={this.handleKeyPress.bind(this)}  />
            <Button icon='power_settings_new' label='Login' raised primary className="login_button" onClick={this.onClick.bind(this)} />
            </div>
            <Snackbar action='Aceptar' active={this.state.active} icon='error' label={this.state.snackbarMessage} onClick={this.handleSnackbarClick.bind(this)} onTimeout={this.handleSnackbarTimeout} type='cancel' />
          </div>
    );
  }
}

export default LoginApp;
