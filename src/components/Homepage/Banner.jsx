import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div>
            <header className="bg-primary">
                <div className="max-w-7xl px-6 py-16 mx-auto">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-semibold text-secondary lg:text-4xl">Challenge Your Mind with <br /> Expert-Curated Quizzes!</h1>

                                <p className="mt-3 text-gray-100">Take daily quizzes, track your progress, and ace your exams. Join a community of learners and educators.</p>

                                <Link href={"/quiz"}>
                                    <button className=" px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-secondary rounded-lg lg:w-auto hover:bg-orange-600 focus:outline-none focus:bg-blue-500">Start a Quiz</button>
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center justify-end w-full mt-6 lg:mt-0 lg:w-1/2">
                            <Image height={800} width={1200} className="w-3/4 h-3/4 lg:max-w-3xl" src="https://i.ibb.co.com/PjVg1bT/quiz.png" alt="banner image" />
                        </div>
                    </div>
                </div>
            </header>
        </div >
    );
};

export default Banner;