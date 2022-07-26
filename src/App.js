import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/> } />

        <Route path='/about' element={<About/>} />

        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </div>
  );
}

export default App;
