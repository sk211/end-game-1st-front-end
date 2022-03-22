import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
const provider = new GoogleAuthProvider();

export default function Login() {
    const onClickButton = (event) => {
        event.preventDefault();
    }
    const auth = getAuth();
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
    };

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className="container">
            <div className='row py-5'>
                <div className="col-md-6 text-center py-5">
                    <img src="https://doccure-react.dreamguystech.com/template/ece4acf86598eb59a48dc7f087716a21.png" alt="" width='300px' className='text-center' />
                </div>
                <div className="col-md-6 py-5">
                    <h2>Login Doccure</h2>
                    <form width="100px" onSubmit={onClickButton} >

                        <input type="email" name="pass" id="pass" placeholder='Enter your Email' className='form-control' /> <br />
                        <input type="password" name="pass" id="pass" className='form-control mb-3 d-block' placeholder='Enter your Password' />
                        <button className="btn btn-danger">Login</button>
                        <br />
                        <br />
                        <br />

                        ------------------or-----------------
                        <br />
                        <br />

                        <button className="btn btn-danger d-flex" onClick={handleGoogleLogin}>

                            Login Google</button>


                    </form>
                </div>
            </div>
        </div>
    )
}
