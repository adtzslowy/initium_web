import React from 'react';
import InitiumLogo from '../assets/icon.svg';
import { Link } from 'react-scroll';

const Footer = () => {
  const links = [
    { name: 'Beranda', to: 'beranda' },
    { name: 'Tentang', to: 'tentang' },
    { name: 'Fitur', to: 'fitur' },
  ];

  return (
    <footer className="bg-[#1d2a35] py-4 pb-4 font-sansation text-center rounded-t-4xl">
      <div className="mt-8 text-center text-[#fff8ee] text-3xl">
        &copy; {new Date().getFullYear()} Initium. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
