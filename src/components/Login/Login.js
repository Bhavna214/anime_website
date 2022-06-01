import { Button, TextField } from "@mui/material"
import { useState } from 'react';
import './styles.css';
import Signup from './../Signup/Signup';
import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import logo  from './../../assets/logo.png';


const Login = () => {
    const [loading, setLoading] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mailError,setMailError] = useState({state:false,msg:''});
    const [passwordError,setPasswordError] = useState({state:false,msg:''});

    const toggleSignUp = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setShowSignUp(true);
        },1500)
    };

    const signin = (e) => {
        e.preventDefault();
        setLoading(true)

        signInWithEmailAndPassword(auth,email,password).then(() => {
            setMailError({state:false,msg:''});
            setPasswordError({state:false, msg:''});
        }).catch((err) => {
            setLoading(false)
            if(err.code === 'auth/wrong password') {
              setPasswordError({state:true,msg:'Incorrect Password'});
              setMailError({state:false,msg:''});
            }
            else if(err.code === 'auth/user-not-found' || err.code === 'auth/invalid-email') {
                setMailError({state:true,msg:'Email does not exist'})
                setPasswordError({state:false,msg:''})
            }
        })
    }

    return (
        <div className="login">
            {showSignUp ? (
                <Signup setShowSignUp={setShowSignUp} />
            ) : (
            <div className="login__content">
                {loading && <div className={loading && "login__loading"}/>}
                <div className={`login__wrapper ${loading && "login__fade"}`}>
                    <img className="login__logo" src={logo} alt='Animino' />
                    <p className="login__title">Sign In</p>
                    <p className="login__subtitle">Continue to Animino</p>

                    <form className="login__form">
                        
                        <TextField className="login__input" id="outlined-basic" label="Email" variant="outlined" type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} error={mailError.state} helperText={mailError.msg} />
                        
                        <TextField className="login__input" id="outlined-basic" label="Password" variant="outlined" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} error={passwordError.state} helperText={passwordError.msg} />
                        
                        <div className="login__infoText">
                            Not your computer? Use guest mode to sign in privately?
                            <a href="/learnmore">Learn More</a>
                        </div>

                        <div className="login__buttons">
                            <Button className="login__button" onClick={toggleSignUp}>
                                Create Account
                            </Button>

                            <Button className="login__button" variant="contained" onClick={signin}>
                                Sign In
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            )}
        </div>
    )
}

export default Login