import React from 'react';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { useState } from 'react';
import './styles.css'

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

  const toggleSignUp = () => {
    setLoading(true);

    setTimeout(() => {
        setLoading(false);
        setShowSignUp(false);
    },1500)
  };

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
              <TextField id='outlined-basic' fullWidth label='Email' type='email' variant='outlined' helperText="You can use numbers, letters and periods" value={formData.email} onChange={(e)=>{
                  setFormData({
                    ...formData,
                    email: e.target.value}
                  )}} />

              <div className="signup__passwordInputs">
                <div className="signup__passwordWrapper">
                <TextField id='outlined-basic' className='signup__passwordInput' label='Password' type={checked ? 'text':'password'} variant='outlined' value={formData.password} onChange={(e)=>{
                  setFormData({
                    ...formData,
                    password: e.target.value}
                  )}} />
                <TextField id='outlined-basic' className='signup__passwordInput' label='Confirm Password' type={checked ? 'text':'password'} variant='outlined' value={formData.confirmPassword} onChange={(e)=>{
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value}
                  )}} />
                </div>
                <p className='signup__helpertext'>You can use 8 or more characters with a mix of letters, numbers and symbols</p>

                <FormControlLabel control={<Checkbox checked={checked} color='primary' onClick={() => {
                  setChecked(!checked)
                }} />} label="Show Password" />
              </div>

              <div className='signup__buttons' >
                <Button className='signup__button' variant='text' color='primary' onClick={toggleSignUp}>Sign In instead</Button>
                <Button className='signup__button' variant='contained' color='primary'>Create</Button>
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