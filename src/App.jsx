import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './Page.jsx';

/* ═══════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════ */
function HomePage() {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1 className="home-title">Our Story</h1>
        <p className="home-subtitle">Four chapters of love in beautiful moments</p>
        <nav className="home-nav">
          <a href="/chapter/1" className="chapter-link chapter-1">
            <span className="chapter-num">I</span>
            <span className="chapter-name">You, The Girl I Love</span>
          </a>
          <a href="/chapter/2" className="chapter-link chapter-2">
            <span className="chapter-num">II</span>
            <span className="chapter-name">The First Glance</span>
          </a>
          <a href="/chapter/3" className="chapter-link chapter-3">
            <span className="chapter-num">III</span>
            <span className="chapter-name">Growing Into My Heart</span>
          </a>
          <a href="/chapter/4" className="chapter-link chapter-4">
            <span className="chapter-num">IV</span>
            <span className="chapter-name">Finally, Us</span>
          </a>
        </nav>
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════════════
   MAIN APP WITH ROUTING
   ═══════════════════════════════════════════════ */
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chapter/:pageNum" element={<Page />} />
      </Routes>
    </Router>
  );
}
