import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () => {
            googleSignIn()
            .then(result =>{
                const user = result.user;
                // console.log(user);
                const currentUser  = {
                    email: user.email
                }

                 // get jwt token
            fetch('https://genius-car-server-five-sandy.vercel.app/jwt',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res =>res.json())
            .then( data =>{
                console.log(data);
                // local storage is the easiest but not the best place to storage
                localStorage.setItem('genius-token', data.token);   
            });

            })
            .catch(error => console.error(error));
    }
    return (
        <div>
               <p className='text-center'><small>Social Login</small></p>
               <p className='text-center'>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline btn-success font-bold'>Google SignIn</button>
               </p>
        </div>
    );
};

export default SocialLogin;