import {useAuthValue} from "./AuthContext.jsx";
import {signOut} from 'firebase/auth';
import {auth} from "../../firebase/FirebaseConfig.js";
import {useNavigate} from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    const {currentUser} = useAuthValue();

    return (
        <div className='center'>
            <div className='profile'>
                <h1>
                    Jouw Profiel
                </h1>
                <p>
                    Email:{currentUser?.email}
                </p>
                <p>
                    Email verified:{`${currentUser?.emailVerified}`}
                </p>
                <button type="button" onClick={() => signOut(auth)}>
                    Sign Out
                </button>
                <button type="button" onClick={() => navigate('/admin')}>
                    Admin Dashboard
                </button>
            </div>
        </div>
    )
}

export default Profile;