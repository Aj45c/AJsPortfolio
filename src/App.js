import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

function App(props) {
  return (
    <div id="App" className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<About/>} />

        <Route path='/projects' element={<Projects/>} />
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
