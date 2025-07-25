import {useAuthValue} from "./AuthContext.jsx";
import {useEffect, useState} from "react";
import {auth} from "../../firebase/FirebaseConfig.js";
import {sendEmailVerification} from "firebase/auth";
import {useNavigate} from "react-router-dom";

function VerifyEmail() {
    const {currentUser, timeActive, setTimeActive} = useAuthValue();
    const [time, setTime] = useState(60);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            currentUser?.reload()
                .then(() => {
                    if (currentUser?.emailVerified) {
                        clearInterval(interval)
                        navigate('/admin');
                    }
                })
                .catch((err) => {
                    alert(err.message);
                });
        }, 1000);

        return () => clearInterval(interval);
    }, [navigate, currentUser]);


    useEffect(() => {
        let interval = null
        if (timeActive && time !== 0) {
            interval = setInterval(() => {
                setTime((time) => time - 1)
            }, 1000)
        } else if (time === 0) {
            setTimeActive(false);
            setTime(60);
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timeActive, time])

    const resendEmailVerification = () => {
        setButtonDisabled(true)
        sendEmailVerification(auth.currentUser)
            .then(() => {
                setButtonDisabled(false);
                setTimeActive(true);
            })
            .catch((err) => {
                alert(err.message)
                setButtonDisabled(false)
            })
    }

    return (
        <div>
            <span>
                {currentUser?.email}
            </span>
            <button
                onClick={resendEmailVerification}
                disabled={timeActive}
            >
                Resend Email {timeActive && time}
            </button>
        </div>
    );
}


export default VerifyEmail;