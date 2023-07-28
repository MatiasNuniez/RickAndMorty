import './App.css';
import { Navbar } from '../src/components/Navbar.jsx'
import { Inicio } from './components/inicio/Inicio.jsx';
import { Footer } from './components/Footer.jsx';
import { All } from './components/All/All.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Details } from './components/Details/Details';

function App() {
  
  return (

    <div className="App">

      <Navbar />

      <Router>
        <Routes>
          <Route path='/' Component={Inicio} />
        </Routes>

        <Routes>
          <Route path='/characters' Component={All} />
        </Routes>

        <Routes>
          <Route path='/characters/:id' Component={Details} />
        </Routes>

      </Router>

      <Footer />


    </div>
  );
}

export default App;
