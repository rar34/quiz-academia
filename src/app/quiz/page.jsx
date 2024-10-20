"use client"
import Link from 'next/link';
import React from 'react';

const QuizPage = () => {

    return (
        <div className='max-w-4xl min-h-[65vh] mx-auto my-10 px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <Link href={"/ict"}>
                    <h2 className='p-14 flex justify-center items-center hover:bg-primary hover:text-white text-3xl font-bold bg-secondary'>ICT</h2>
                </Link>
                <h2 className='p-14 flex justify-center items-center hover:bg-primary hover:text-white text-3xl font-bold bg-secondary'>Bangla</h2>
                <h2 className='p-14 flex justify-center items-center hover:bg-primary hover:text-white text-3xl font-bold bg-secondary'>English</h2>
                <h2 className='p-14 flex justify-center items-center hover:bg-primary hover:text-white text-3xl font-bold bg-secondary'>Mathematics</h2>
                <h2 className='p-14 flex justify-center items-center hover:bg-primary hover:text-white text-3xl font-bold bg-secondary'>Physics</h2>
                <h2 className='p-14 flex justify-center items-center hover:bg-primary hover:text-white text-3xl font-bold bg-secondary'>Chemistry</h2>
                <h2 className='p-14 flex justify-center items-center hover:bg-primary hover:text-white text-3xl font-bold bg-secondary'>Biology</h2>
            </div>
        </div>
    );
};

export default QuizPage;
