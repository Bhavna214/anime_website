import React from 'react';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { useState } from 'react';

const Signup = () => {
  const [loading, setLoading] = useState(false)
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
                <TextField id='outlined-basic' className='signup__nameInput' label='First Name' type='name' variant='outlined' />
                <TextField id='outlined-basic' className='signup__nameInput' label='Last Name' type='name' variant='outlined' />
              </div>
              <TextField id='outlined-basic' fullWidth label='Email' type='email' variant='outlined' helperText="You can use numbers, letters and periods" />

              <div className="signup__passwordInputs">
                <div className="signup__passwordInput">
                <TextField id='outlined-basic' label='Password' type='password' variant='outlined' />
                <TextField id='outlined-basic' label='Confirm Password' type='password' variant='outlined' />
                </div>
                <p className='signup__helpertext'>You can use 8 or more characters with a mix of letters, numbers and symbols</p>

                <FormControlLabel control={<Checkbox color='primary' />} label="Show Password" />
              </div>

              <div className='signup__buttons' >
                <Button className='signup__button' variant='text' color='primary'>Sign In instead</Button>
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