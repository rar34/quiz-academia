import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='flex flex-col gap-6'>
                <Link className='bg-secondary text-center p-4 font-bold text-2xl hover:bg-primary hover:text-white' href={"/"}>Chapter 1</Link>
                <Link className='bg-secondary text-center p-4 font-bold text-2xl hover:bg-primary hover:text-white' href={"/"}>Chapter 2</Link>
                <Link className='bg-secondary text-center p-4 font-bold text-2xl hover:bg-primary hover:text-white' href={"/"}>Chapter 3.1</Link>
                <Link className='bg-secondary text-center p-4 font-bold text-2xl hover:bg-primary hover:text-white' href={"/"}>Chapter 3.2</Link>
                <Link className='bg-secondary text-center p-4 font-bold text-2xl hover:bg-primary hover:text-white' href={"/"}>Chapter 4</Link>
                <Link className='bg-secondary text-center p-4 font-bold text-2xl hover:bg-primary hover:text-white' href={"/"}>Chapter 5</Link>
                <Link className='bg-secondary text-center p-4 font-bold text-2xl hover:bg-primary hover:text-white' href={"/"}>Chapter 6</Link>
            </div>
        </div>
    );
};

export default page;