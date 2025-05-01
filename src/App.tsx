import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import Insights from './pages/Insights';
import UseCases from './pages/UseCases';
import About from './pages/About';
import Contact from './pages/Contact';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="features" element={<Features />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="insights" element={<Insights />} />
        <Route path="use-cases" element={<UseCases />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;