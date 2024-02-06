
import './App.css';
import Navbar from './comp/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './comp/pages/Home.js';
import Onas from './comp/pages/Onas';
import Voditelji from './comp/pages/Voditelji';
import PrejsnaLeta from './comp/pages/PrejsnaLeta';
import Footer from './comp/Footer';
import Editor from './comp/pages/Editor.js';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/Onas' exact Component={Onas}/>
          <Route path='/Voditelji' exact Component={Voditelji}/>
          <Route path='/PrejsnaLeta' exact Component={PrejsnaLeta}/>
          <Route path='/Editor' exact Component={Editor}/>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
