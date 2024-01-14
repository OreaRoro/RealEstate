import {GoogleAuthProvider, getAuth, signInWithPopup} from '@firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInStart, signInFailure, signInSuccess } from '../redux/user/userSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handelGoogleClick = async () => {
      try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);

        const result = await signInWithPopup(auth, provider);
        const res = await fetch('/api/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: result.user.displayName, email: result.user.email, photo: result.user.photoURL})
        });
        const data = await res.json();
        if (data.success === false) {
          dispatch(signInFailure(data.message));
           return;
         }
         dispatch(signInSuccess(data));
         navigate('/');
      } catch (error) {
        dispatch(signInFailure(error.message));
        console.log(`Couldn't sign in with google ${error}`)
      }
    }
  return (
    <button
        onClick={handelGoogleClick}
        type='button'
        className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-85'
    >
        Continue with google
    </button>
  )
}
