import { Button, TextField } from "@mui/material"
import { useState } from 'react';

const Login = () => {
    const [loading, setLoading] = useState(false);

    return (
        <div className="login background--white">
            <div className="login__content">
                {loading && <div className="login__loading"/>}
                <div className="login__wrapper">
                    <img className="login__logo" src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google"></img>
                    <p className="login__title">Sign In</p>
                    <p className="login__subtitle">Continue to Gmail</p>

                    <form className="login__form">
                        
                        <TextField className="login__input" id="outlined-basic" label="Email" variant="outlined" type="email" />
                        
                        <TextField className="login__input" id="outlined-basic" label="Password" variant="outlined" type="password" />
                        
                        <div className="login__infotext">
                            Not your computer? Use guest mode to sign in privately?
                            <a href="/learnmore">Learn More</a>
                        </div>

                        <div className="login__buttons">
                            <Button className="login__button" color="primary">
                                Create Account
                            </Button>

                            <Button className="login__button" color="primary" variant="conatined">
                                Sign In
                            </Button>
                        </div>
                    </form>
                </div>
            </div>        
        </div>
    )
}

export default Login