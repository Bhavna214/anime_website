import React from 'react';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { useState } from 'react';
import './styles.css';
import {auth} from '../../lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const Signup = ({setShowSignUp}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [checked, setChecked] = useState(false);
  const [passwordError, setPasswordError] = useState({state:false, msg:''});
  const [emailError, setEmailError] = useState({state:false, msg:''});

  const toggleSignUp = () => {
    setLoading(true);

    setTimeout(() => {
        setLoading(false);
        setShowSignUp(false);
    },1500)
  };

  const createAccount = (e) => {
    e.preventDefault();
    setLoading(true);
    const err = formData.password === formData.confirmPassword;
    
    if(!err) {
      setPasswordError({state:true,msg:'Passwords do not match'});
      setFormData({...formData, confirmPassword:''});
      setLoading(false);
      return;
    }
    else {
      setPasswordError({state:false,msg:''});
      setEmailError({state:false,msg:''});
    }

    createUserWithEmailAndPassword(auth,formData.email,formData.password)
    .then(() => {
      auth.currentUser.updateProfile({
        displayName: `${formData.firstName} ${formData.lastName}`
      })
      .then(() => {
        setLoading(false);
        setEmailError({state:false, msg:''});
        setPasswordError({state: false, msg: ''});
      })
    })
    .catch((error) => {
      if(error.code === 'auth/email-already-in-use') {
        setEmailError({state:true,msg:'Email is already in use'})
        setLoading(false)
        setFormData({...formData,email:''})
      }
      if(error.code === 'auth/invalid-email') {
        setEmailError({state:true,msg:'Email is not properly formatted'})
        setFormData({...formData,email:''})
        setLoading(false)
      }
      else if(error.code === 'auth/weak-password') {
        setPasswordError({state:true,msg:'Password should atleast be 6 characters'})
        setFormData({...formData,password:'',confirmPassword:''})
        setLoading(false)
      }
    })
  }

  const disabled = !formData.email || !formData.password || !formData.firstName || !formData.lastName || !formData.confirmPassword;

  return (
    <div className='signup__container'>
      <div className={`signup ${loading && "login__fade"}`}>
        {loading && <div className='login__loading signup__loading' />}

        <div className="signup__container">
          <div className="signup__left">
            <img className='login__logo' src='https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='Google' />

            <h1 className='signup__heading'>Create your Google Account</h1>
            <p className='sigup__subheading'>Continue to Gmail</p>

            <div className='signup__inputs'>
              <div className='signup__nameInputs'>
                <TextField id='outlined-basic' className='signup__nameInput' label='First Name' type='name' variant='outlined' value={formData.firstName} onChange={(e)=>{
                  setFormData({
                    ...formData,
                    firstName: e.target.value}
                  )}} />
                <TextField id='outlined-basic' className='signup__nameInput' label='Last Name' type='name' variant='outlined' value={formData.lastName} onChange={(e)=>{
                  setFormData({
                    ...formData,
                    lastName: e.target.value}
                  )}} />
              </div>
              <TextField id='outlined-basic' fullWidth label='Email' type='email' variant='outlined' helperText={emailError.state ? emailError.msg : "You can use numbers, letters and periods"} value={formData.email} onChange={(e)=>{
                  setFormData({
                    ...formData,
                    email: e.target.value}
                  )}} error={emailError.state} />

              <div className="signup__passwordInputs">
                <div className="signup__passwordWrapper">
                <TextField id='outlined-basic' className='signup__passwordInput' label='Password' type={checked ? 'text':'password'} variant='outlined' value={formData.password} onChange={(e)=>{
                  setFormData({
                    ...formData,
                    password: e.target.value}
                  )}} error={passwordError.state} />
                <TextField id='outlined-basic' className='signup__passwordInput' label='Confirm Password' type={checked ? 'text':'password'} variant='outlined' value={formData.confirmPassword} onChange={(e)=>{
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value}
                  )}} error={passwordError.state} />
                </div>
                <p className={`signup__helpertext ${passwordError.state && "signin__error"}`}>{passwordError.state ? passwordError.msg : 'You can use 8 or more characters with a mix of letters, numbers and symbols'}</p>

                <FormControlLabel control={<Checkbox checked={checked} color='primary' onClick={() => {
                  setChecked(!checked)
                }} />} label="Show Password" />
              </div>

              <div className='signup__buttons' >
                <Button className='signup__button' variant='text' color='primary' onClick={toggleSignUp}>Sign In instead</Button>
                <Button className='signup__button' variant='contained' color='primary' onClick={createAccount} disabled={disabled} >Create</Button>
              </div>
            </div> 
          </div>
          <figure className="signup__figure">
            <img className="signup__figureImg" src='https://ssl.gstatic.com/accounts/signup/glif/account.svg' alt='Account' />
            <figcaption className='signup__figcaption'>One account. All of google working for you</figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Signup