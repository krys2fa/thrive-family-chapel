import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Events from './pages/Events/Events';
import Contact from './pages/Contact/Contact';
import Give from './pages/Give/Give';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/give" element={<Give />} />
      </Routes>
    </>
  );
}

export default App;
