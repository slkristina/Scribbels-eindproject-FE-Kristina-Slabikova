import './App.css'
import './styles/global.css';
import './styles/index.css';
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
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
                <Route path="/" element={<Homepage/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/episodes" element={<Episodes/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/admin" element={<AdminPage/>}/>
            </Routes>
        </>
    );
}

export default App;