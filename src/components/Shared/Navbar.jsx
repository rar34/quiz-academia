"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { signOut } from "next-auth/react"
import Dashboard from '@/app/dashboard/page';

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
        }
    ]

    const session = useSession()
    // console.log(session)

    // if (pathName.includes('dashboard')) {
    //     return (
    //         <div className='bg-primary min-h-[65vh] p-4 flex gap-6 justify-center text-center text-white'>
    //             {/* <Link href={"/"}>Home</Link> */}
    //             <Dashboard />
    //         </div>
    //     )
    // }

    return (
        <div className='sticky top-0 bg-primary py-4 shadow-md'>
            <div className="navbar max-w-7xl mx-auto">
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
                    {/* <Link href={"/"} className="font-bold border-2 border-gray-200 rounded-md p-2 text-gray-200 text-xl md:text-3xl">Quiz<span className='text-secondary'>Academia</span></Link> */}
                    <Link href="/">
                        <Image src="/assets/quiz-academia.png" height={100} width={300} alt="quiz-academia" />
                    </Link>
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
                    {
                        session.data && <p className='text-white mr-4 text-lg'>Hi, <span className='italic'>{session?.data?.user?.name}</span></p>
                    }
                    {
                        !session.data ? <Link href={"/login"} className="btn btn-outline btn-secondary">Login</Link> :
                            // <button className="btn btn-outline btn-secondary" onClick={()=> signOut()}>Logout</button>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <Image height={20} width={20}
                                            alt="Tailwind CSS Navbar component"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                        <Link href={"/profile"} className="justify-between hover:text-secondary transition">
                                            Profile
                                        </Link>
                                    </li>
                                    <li><Link className="hover:text-secondary transition" href={"/dashboard"}>Dashboard</Link></li>
                                    <li><button className="hover:text-secondary transition" onClick={()=> signOut()}>Logout</button></li>
                                </ul>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;