import './App.css'
import './styles/global.css';
import './styles/index.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Episodes from './pages/Episodes.jsx'
import Shop from './pages/Shop.jsx'
import Team from './pages/Team.jsx'
import Contact from './pages/Contact.jsx'
import AdminPage from './admin/AdminPage.jsx'

function App() {
    console.log("App is rendering");
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/over-scribbels" element={<About/>}/>
                <Route path="/verhaaltjes" element={<Episodes/>}/>
                <Route path="/winkeltje" element={<Shop/>}/>
                <Route path="/over-de-makers" element={<Team/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/admin" element={<AdminPage/>}/>
            </Routes>
        </>
    );
}

export default App;