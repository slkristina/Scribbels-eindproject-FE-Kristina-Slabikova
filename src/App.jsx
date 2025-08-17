import './App.css';
import './styles/global.css';
import './styles/index.css';
import {useState} from "react";
import {AuthProvider, useAuthValue} from "./context/AuthContext.jsx";
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/home/Home.jsx';
import AdventuresPage from "./pages/adventures/AdventuresPage.jsx";
import About from './pages/about/About.jsx';
import Shop from './pages/shop/Shop.jsx';
import Team from './pages/team/Team.jsx';
import Contact from './pages/contact/Contact.jsx';
import AdminPage from "./pages/admin/AdminPage.jsx";
import AdminLogin from "./pages/admin/login/AdminLogin.jsx";
import AdminRegistration from "./pages/admin/register/AdminRegistration.jsx";
import Footer from "./components/Footer/Footer.jsx";
import VerifyEmail from "./pages/admin/VerifyEmail.jsx";
import PrivateRoute from "./pages/admin/PrivateRoute.jsx";

function App() {

    const { currentUser } = useAuthValue();
    const [timeActive, setTimeActive] = useState(false);



    return (
        <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
            <div className="app-container">
                <Navbar/>
                <main className="main-webpages-wrapper">
                    <div className="content-container">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/over-scribbels" element={<About/>}/>
                            <Route path="/verhaaltjes" element={<AdventuresPage/>}/>
                            <Route path="/winkeltje" element={<Shop/>}/>
                            <Route path="/over-de-makers" element={<Team/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                            <Route
                                path="/admin"
                                element={
                                    <PrivateRoute>
                                        <AdminPage />
                                    </PrivateRoute>
                                }
                            />
                            <Route path="/login" element={<AdminLogin/>}/>
                            <Route path="/register" element={<AdminRegistration/>}/>
                            <Route path="/verify-email" element={<VerifyEmail/>}/>
                        </Routes>
                    </div>
                </main>
                <Footer/>
            </div>
        </AuthProvider>
    );
}

export default App;