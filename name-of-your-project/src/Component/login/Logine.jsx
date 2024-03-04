import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import App from '../../App';
import app from '../Firebase/firebase.init';


const Logine = () => {
    const [user, setUser] = useState([]);

    // const auth = getAuth(App);
    // //  const provider = new GoogleAurthProvider();
    // const googleSigneIn =() =>{

    //     console.log('Google Mama is coming');
    // }
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();


    const googleSgnIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {

                const logInuser = result.user;
                console.log(logInuser);

                setUser(logInuser);
            })
            .catch(error => {
                console.log('Error', error.message);
            })

    }
    // This is For gitHub Auth Provider.





    const googleSgnOut = () => {

        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null);

            })
            .catch(error => {
                console.log(error)
            })
        console.log('SignOut confirm');
    }
    // callback function for gitHub::
    const gitHubSgnIn =() =>{

       signInWithPopup(auth,gitProvider)
       .then( result=>{
       const loginUser = result.user;
        console.log(loginUser);
        setUser(loginUser);
       })
       .catch(error => {

        console.log(error);

       })
    }



    return (
        <div>
            {

                user ?
                    <button onClick={() => googleSgnOut()}>Google LogOut</button> :
                    <div>
                          <button onClick={() => googleSgnIn()}>Google Login</button>
                          <button onClick={() => gitHubSgnIn()}>GitHub Login</button>

                    </div>
                    


            }


            {
                user && <div>
                    <h2>UserName:{user.displayName}</h2>
                    <p>Email:{user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>

            }

        </div>
    );
};

export default Logine;