import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a href="main" className="logo">agáta slámová</a>
      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>
      <nav className={`nav-links ${open ? 'open' : ''}`}>
        <a href="/projekty">projekty</a>
        <div className="dropdown">
          <a href="#">tvorba</a>
          <ul className="dropdown-content">
            <li><a href="/2d">2D</a></li>
            <li><a href="/3d">3D</a></li>
            <li><a href="/4d">4D</a></li>
          </ul>
        </div>
        <a href="/vystavy">výstavy</a>
        <a href="/lajfstory">lajf story</a>
      </nav>
    </header>
  );
}
