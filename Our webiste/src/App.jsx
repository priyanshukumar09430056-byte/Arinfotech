import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './component/nav'
import Footer from './component/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Team from './pages/Team'
import Academic from './pages/Academic'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/team" element={<Team />} />
      <Route path="/academic" element={<Academic />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default App
