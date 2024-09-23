"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const navItems = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Quiz',
            path: '/quiz'
        },
        {
            title: 'Suggestion',
            path: '/suggestion'
        },
        {
            title: 'Syllabus',
            path: '/syllabus'
        },
        {
            title: 'Profile',
            path: '/profile'
        },
    ]
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link href={"/"} className="btn btn-ghost text-3xl">Quiz<span className='text-red-600'>Academia</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className='flex gap-6 text-xl'>
                        {
                            navItems.map(item => (
                                <Link className={`${pathName === item.path && 'text-red-500 border-b-2 border-red-600'}`} key={item.path} href={item.path}>{item.title}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;