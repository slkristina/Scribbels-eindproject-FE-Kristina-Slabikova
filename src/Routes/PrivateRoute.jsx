import {Navigate} from 'react-router-dom';
import {useAuthValue} from "../context/AuthContext.jsx";

export default function PrivateRoute({children}) {
    const {currentUser} = useAuthValue();

    return currentUser ? children : <Navigate to="/login" />;
}