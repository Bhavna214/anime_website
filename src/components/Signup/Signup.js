import React from 'react';
import { TextField } from '@mui/material';
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
                <TextField id='outlined-basic' label='First Name' type='name' variant='outlined' />
              </div>
            </div> 

          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup