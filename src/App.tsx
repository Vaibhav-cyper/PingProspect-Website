import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Features from './pages/Features/Features';
import Pricing from './pages/Pricing/Pricing';
import DownloadPage from './pages/Download/DownloadPage';
import ContactPage from "./pages/Contact/ContactPage";
import Privacy from './pages/Privacy/Privacy';
import Terms from './pages/Terms/Terms';
import GuideList from './pages/Guide/GuideList';
import BlogPost from './pages/Guide/BlogPost';
import FAQ from './components/FAQ/FAQ';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/features" element={<Features />} />
          <Route path="/guide" element={<GuideList />} />
          <Route path="/guide/:slug" element={<BlogPost />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
