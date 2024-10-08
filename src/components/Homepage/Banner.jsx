import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div>
            <header className="bg-slate-200">
                <div className="container px-6 py-16 mx-auto">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Challenge Your Mind with <br /> Expert-Curated Quizzes!</h1>

                                <p className="mt-3 text-gray-600 dark:text-gray-400">Take daily quizzes, track your progress, and ace your exams. Join a community of learners and educators.</p>

                                <Link href={"/quiz"}>
                                    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-primary rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start a Quiz</button>
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <Image height={200} width={200} className="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg" />
                        </div>
                    </div>
                </div>
            </header>
        </div >
    );
};

export default Banner;