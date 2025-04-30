import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">Agáta Slámová</div>
      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>
      <nav className={`nav-links ${open ? 'open' : ''}`}>
        <a href="/projekty">Projekty</a>
        <div className="dropdown">
          <a href="#">Tvorba</a>
          <ul className="dropdown-content">
            <li><a href="/2d">2D</a></li>
            <li><a href="/3d">3D</a></li>
            <li><a href="/4d">4D</a></li>
          </ul>
        </div>
        <a href="/výstavy">Výstavy</a>
        <a href="/life-story">Life Story</a>
      </nav>
    </header>
  );
}
