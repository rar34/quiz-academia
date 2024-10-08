import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className="my-20">
            <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md border-2 border-primary">
                <div className="flex justify-center mx-auto">
                    <Image width={50} height={50} className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
                </div>

                <form className="mt-6">
                    <div>
                        <label for="email" className="block text-sm text-gray-800">Email</label>
                        <input name="email" type="email" placeholder="Your email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg" />
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label for="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                            <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</a>
                        </div>

                        <input type="password" placeholder="Your password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg" />
                    </div>

                    <div className="mt-6">
                        <button className="w-full btn btn-primary">
                            Sign In
                        </button>
                    </div>
                </form>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                    <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
                        or login with Social Media
                    </a>

                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                </div>

                <div className="flex items-center mt-6 -mx-2">
                    <button type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                        <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                            </path>
                        </svg>

                        <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                    </button>

                    <a href="#" className="p-2 mx-2 font-medium  transition-colors duration-300 transform rounded-lg">
                        <FaSquareFacebook className="text-sky-600 text-4xl" />
                    </a>
                </div>

                <p className="mt-8 text-sm font-light text-center text-gray-400"> Don&apos;t have an account? <Link href="/signup" className="font-bold text-primary ">Create One</Link></p>
            </div>
        </div>
    );
};

export default Login;