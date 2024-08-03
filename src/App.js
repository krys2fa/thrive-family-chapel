import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Events from './pages/Events/Events';
import Contact from './pages/Contact/Contact';

import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
