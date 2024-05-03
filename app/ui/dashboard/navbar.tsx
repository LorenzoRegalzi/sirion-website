"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ArrowDownIcon from '../icon/arrow-down';
import Image from 'next/image';
import Logo from "./../../../img/default/sirion.png"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenKH, setIsOpenKH] = useState(false);
    const [isOpenProd, setIsOpenProd] = useState(false);
    const [isOpenContact, setIsOpenContact] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const toggleMenuKH = () => {
      setIsOpenKH(!isOpenKH);
    };

    const toggleMenuProd = () => {
      setIsOpenProd(!isOpenProd);
    };

    const toggleMenuContact = () => {
      setIsOpenContact(!isOpenContact);
    };

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      // Aggiungi un listener per lo scroll
      window.addEventListener('scroll', handleScroll);
  
      // Pulisci il listener quando il componente viene smontato
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
const navbarClass = scrollY > 0 ? 'bg-customBlueRgb' : '';
    return (
<nav className={`fixed top-0 w-full z-10 transition-colors duration-300 ${navbarClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex-shrink-0">
            {/* Your logo */}
            <Link href={'/'}>
            
                <Image src={Logo}  className="h-7 w-auto" alt="LOGO" data-no-retina="" ></Image>
          
            </Link>
          </div>
          {/* Navbar links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            
              <Link href="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <div className="relative" onMouseEnter={toggleMenuKH} onMouseLeave={toggleMenuKH}>
                <button className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none flex items-center">
                  Prodotti
                  <ArrowDownIcon />
                </button>
                {isOpenKH && (
                  <div className="bg-customWhite absolute z-10 left-0 w-40 bg-white divide-y divide-gray-100  shadow-lg">
                    <Link href="/know-how" className="text-customBlack block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Know-How</Link>
                    <Link href="/products"  className="text-customBlack block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">I nostri prodotti</Link>
                  </div>
                )}
              </div>
              
              <Link href="/technology" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Tecnologia</Link>
              
             
              <Link href="/sostenibility" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Sostenibilità</Link>
            

              <div className="relative" onMouseEnter={toggleMenuContact} onMouseLeave={toggleMenuContact}>
                <button className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none flex items-center">
                
                  Contatti
                  <ArrowDownIcon />
                </button>
                {isOpenContact && (
                  <div className="bg-customWhite absolute z-10 left-0 w-40 bg-white divide-y divide-gray-100 shadow-lg">
                    <Link href="/contact" className="text-customBlack block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dove siamo</Link>
                    <Link href="/job-opportunity" className="text-customBlack block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Job Opportunity</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


