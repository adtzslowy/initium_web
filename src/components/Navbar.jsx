import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const link = [
        { name: 'Beranda', href: '/'},
        { name: 'Tantang', href: 'tentang'},
        { name: 'Fitur', href: 'fitur'},
    ]

    const [active, setActive] = useState("/");

    const handleClick = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        setActive(id);
    }

    useEffect(() => {
        const handleScroll = () => {
            link.forEach((link) => {
                const el = document.getElementById(link.href)
                if (el) {
                    const top = el.offsetTop - 100;
                    const bottom = top + el.offsetHeight;
                    if (window.scrollY >= top && window.scrollY < bottom) {
                        setActive(link.href);
                    }
                }
            });
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

  return (
    <nav className='bg-[#fff8ee] hover:scroll-auto w-full py-4 shadow-md font-sansation fixed top-0 left-0 z-50'>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="gap-3 flex items-center">
                <h1 className='text-black text-5xl'><span className='text-green-400 text-5xl'>In</span>itium<span className='text-green-400'>.</span></h1>
            </div>
            <ul className='flex items-center gap-4 text-2xl'>
                {link.map((item) => (
                    <li key={item.href} className='relative'>
                        <button onClick={() => handleClick(item.href)}
                            className={`px-3 py-2 hover:text-black transition-all duration-300 font-medium cursor-pointer ${active === item.href ? "text-black" : "text-black/50"}`}
                            >
                                {item.name}
                        </button>

                        <span className={`absolute right-0 -bottom-1 h-[2px] bg-green-400 transition-all duration-300 ${active === item.href ? "w-full opacity-100" : "w-0 opacity-0"}`}/>
                    </li>
                 ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
