import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const link = [
        { name: 'Beranda', href: '/', desc: 'Go to homepage'},
        { name: 'Tantang', href: '/tentang', desc: 'Go to tentang'},
        { name: 'Fitur', href: '/fitur', desc: 'Go to fitur'},
        { name: 'Issue', href: '/issue', desc: 'Go to issue'},
        { name: 'Kontak', href: '/kontak', desc: 'Go to kontak'},
    ]

    const location = useLocation();
    const activePath = location.pathname;
  return (
    <nav className='bg-[#fff8ee] w-full py-4 shadow-md font-sansation fixed top-0 left-0 z-50'>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="gap-3 flex items-center">
                <h1 className='text-black text-5xl'><span className='text-green-400 text-5xl'>In</span>itium<span className='text-green-400'>.</span></h1>
            </div>
            <ul className='flex items-center gap-6 text-2xl'>
                {link.map((item) => (
                    <li key={item.href} className='relative'>
                        <Link to={item.href} title={item.desc} className={`cursor-pointer transition-colors ${activePath === item.href ? "text-black" : "text-black/50 hover:text-black" }`}
                            >
                                {item.name}
                            </Link>

                        <span className={`absolute right-0 -bottom-1 h-[2px] bg-green-400 transition-all duration-500 ${activePath === item.href ? "w-full opacity-100" : "w-0 opacity-0"}`}/>
                    </li>
                 ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
