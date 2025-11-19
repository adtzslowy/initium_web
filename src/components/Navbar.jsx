import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const links = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang', href: 'tentang' },
    { name: 'Fitur', href: 'fitur' },
  ];

  const [active, setActive] = useState('/');
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      links.forEach((link) => {
        const el = document.getElementById(link.href);
        if (el) {
          const top = el.offsetTop - 120;
          const bottom = top + el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(link.href);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className='bg-[#fff8ee] w-full py-4 shadow-md font-sansation overflow-hidden fixed top-0 left-0 z-50'>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <h1 className='text-black text-3xl sm:text-5xl font-bold cursor-pointer'>
          <span className='text-green-400'>In</span>itium<span className='text-green-400'>.</span>
        </h1>

        {/* Desktop Links */}
        <ul className='hidden md:flex items-center gap-6 text-lg md:text-2xl'>
          {links.map((item) => (
            <li key={item.href} className='relative'>
              <button
                onClick={() => handleClick(item.href)}
                className={`px-3 py-2 hover:text-black transition-all duration-300 font-medium cursor-pointer ${
                  active === item.href ? "text-black" : "text-black/50"
                }`}
              >
                {item.name}
              </button>
              <span
                className={`absolute right-0 -bottom-1 h-[2px] bg-green-400 transition-all duration-300 ${
                  active === item.href ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className='md:hidden flex items-center'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-[#fff8ee] w-full px-6 py-4 flex flex-col gap-4'>
          {links.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={`text-left text-lg font-medium px-3 py-2 hover:text-black transition-colors ${
                active === item.href ? "text-black" : "text-black/50"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
