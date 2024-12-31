import { Routes, Route } from 'react-router-dom';
import TextForm from './Component/TextForm';
import AboutUs from './Component/AboutUs';

const routes = (
  <Routes>
    <Route path="/" element={<TextForm/>} />
    <Route path="/about" element={<AboutUs/>} />
    <Route path="/contact" element={<TextForm/>
    } />
  </Routes>
);