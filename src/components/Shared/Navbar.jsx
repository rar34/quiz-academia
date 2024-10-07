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
        <div className='border-secondary border-b-4 bg-primary py-4'>
            <div className="navbar container mx-auto">
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
                            className="menu menu-sm dropdown-content text-primary bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                navItems.map(item => (
                                    <Link className={`${pathName === item.path && 'text-secondary border-b-2 border-secondary'} `} key={item.path} href={item.path}>{item.title}</Link>
                                ))
                            }
                        </ul>
                    </div>
                    <Link href={"/"} className="font-bold border-2 border-gray-200 rounded-md p-2 text-gray-200 text-xl md:text-3xl">Quiz<span className='text-secondary'>Academia</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className='flex gap-6 text-xl text-white'>
                        {
                            navItems.map(item => (
                                <Link className={`${pathName === item.path && 'text-secondary border-b-2 border-secondary'} `} key={item.path} href={item.path}>{item.title}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className="navbar-end">
                    <Link href={"/login"} className="btn btn-outline btn-secondary">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;