import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import ClientModal from './components/ClientModal';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsClientModalOpen(true);
    window.addEventListener('openClientModal', handleOpenModal);
    return () => window.removeEventListener('openClientModal', handleOpenModal);
  }, []);

  const closeClientModal = () => setIsClientModalOpen(false);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ClientModal isOpen={isClientModalOpen} onClose={closeClientModal} />
    </BrowserRouter>
  );
}

export default App;