'use client'
import Image from 'next/image';
import { useState } from 'react';
import Logo from '../utilis/images/logo.png'
import Link from 'next/link';
import AdmissionButton from './admissionOpenButton';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const isPath = usePathname().startsWith('/admission-enquiry')
    if (isPath) return <></>


    return (
        <>
            <AdmissionButton />
            <nav className="bg-white border-gray-200 sticky top-0 z-50">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src={Logo} width={120} height={100} alt="Wisdom Waves School" />
                    </Link>
                    <button
                        onClick={toggleCollapse}
                        className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-default"
                        aria-expanded={!isCollapsed}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`w-full md:block md:w-auto ${isCollapsed ? 'hidden' : ''}`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <Link href="#" className="block py-2 px-3 text-purple-900 font-[700] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-3 text-purple-900 font-[700] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" >About</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-3 text-purple-900 font-[700] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Services</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-3 text-purple-900 font-[700] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Pricing</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-3 text-purple-900 font-[700] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
