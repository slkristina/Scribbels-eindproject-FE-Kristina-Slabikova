import './App.css'
import './styles/global.css';
import './styles/index.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/home/Home.jsx'
import AdventuresPage from "./pages/adventures/AdventuresPage.jsx";
import About from './pages/about/About.jsx'
import Shop from './pages/shop/Shop.jsx'
import Team from './pages/team/Team.jsx'
import Contact from './pages/contact/Contact.jsx'
import AdminPage from "./pages/admin/AdminPage.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";


function App() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/over-scribbels" element={<About/>}/>
                    <Route path="/verhaaltjes" element={<AdventuresPage/>}/>
                    <Route path="/winkeltje" element={<Shop/>}/>
                    <Route path="/over-de-makers" element={<Team/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/admin" element={<AdminPage/>}/>
                    <Route path="/adminLogin" element={<AdminLogin/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;