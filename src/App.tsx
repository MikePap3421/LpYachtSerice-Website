import './App.css'
import Home from './components/Home'
import { Routes, Route } from "react-router-dom";
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound';


function App() {

  return (<>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
