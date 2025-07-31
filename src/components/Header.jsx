import { Link, NavLink } from 'react-router-dom';
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { useState } from 'react';
import Button from './Button';

export default function Header() {
  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome />, to: '/' },
    { id: 'about', label: 'About', icon: <FaInfoCircle />, to: '/about' },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope />, to: '/contact' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="flex justify-between p-5">
        <h1>
          <Link to="/" className="text-xl text-white">
            Lean Canvas
          </Link>
        </h1>
        <nav className="space-x-4 sm:flex hidden">
          {navItems.map(item => (
            <NavLink
              key={item.id}
              to={item.to}
              className="hover:text-gray-300 space-x-1"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Button className={'hidden md:block'}>Button</Button>
        <button className="md:hidden" onClick={toggleMenu}>
          <FaBars />
        </button>

        <aside
          className={`fixed top-0 left-0 w-64 h-full bg-gray-800 z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-white focus:outline-none"
              aria-label="Close Menu"
              onClick={toggleMenu}
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-col flex space-y-4 p-4">
            {navItems.map(item => (
              <NavLink
                key={item.id}
                to={item.to}
                className="hover:text-gray-300 space-x-1"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>
      </div>
    </header>
  );
}
