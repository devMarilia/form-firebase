import React, {useState, useEffect} from 'react'  
import Login from '../Login/index'
import Profile from '../Profile/index'
import fire from '../../fire' 
import '../../../src/App.css'

function Cadastro() {
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [hasAccount, setHasAccount] = useState(false)

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErros = () => {
        setEmailError('');
        setPasswordError('');

    }

    const handleLogin = () => {
        clearErros();
        fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
            switch(err.code) {
                case"auth/invalid-email": 
                case "auth/user-disabled":
                case "auth/user-not-forund":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message)
                    break;
                    default:
            }
        })
    }

    const handleSignup = () => {
        clearErros()
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
            switch(err.code) {
                case "auth/email-alredy-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
                    default:
            }
        });
    };

    const handleLogout = () => {
        fire.auth().signOut();
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if(user) {
                clearInputs()
                setUser(user);
            }else{
                setUser('');
            }
        });
    };

    useEffect(() => {
        authListener();
    }, [])    

    return (
        <div>
            {user ? (
                <Profile handleLogout={handleLogout}/>
            ) : (
                <Login 
                email={email} 
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword} 
                handleLogin={handleLogin} 
                handleSignup={handleSignup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
                />
            )}
      
           
        </div>
    )
}

export default Cadastro
