import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/products', label: 'Products' },
  { path: '/services', label: 'Technology' },
  { path: '/use-cases', label: 'Success Stories' },
  { path: '/blog', label: 'Insights' },
  { path: '/careers', label: 'Careers' },
  { path: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    color: '#FFDB58',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
  };

  const NavLinks: React.FC = () => (
    <>
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className="text-white hover:text-mustard-yellow transition duration-300 py-2 px-3 rounded-md text-sm font-medium"
          style={({ isActive }) => (isActive ? activeLinkStyle : {})}
          onClick={() => setIsOpen(false)}
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );

  return (
    <header className="bg-cerulean-blue/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-white text-2xl font-bold tracking-wider">
              Rainbow
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLinks />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-mustard-yellow focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <NavLinks />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;