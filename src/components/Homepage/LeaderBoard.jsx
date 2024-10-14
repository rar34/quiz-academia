import Image from 'next/image';
import React from 'react';

const Leaderboard = () => {
    return (
        <div className="max-w-7xl mx-auto px-2 my-14">
            <h2 className="text-5xl mt-14 text-center  pb-2 font-semibold text-primary">Leader Board</h2>
            <h4 className="text-2xl font-medium text-center text-gray-800">Top 10 participants in this week.</h4>
            <hr className="my-10 border border-primary"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-center rounded-lg bg-base-100 border-2 border-secondary p-4">
                    <figure>
                        <Image height={70} width={70}
                            src="https://i.ibb.co.com/FDpGqc0/pp.jpg"
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">John English</h2>
                        <p>Doing great</p>
                    </div>
                </div>
                <div className="flex items-center rounded-lg bg-base-100 border-2 border-secondary p-4">
                    <figure>
                        <Image height={70} width={70}
                            src="https://i.ibb.co.com/FDpGqc0/pp.jpg"
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">John English</h2>
                        <p>Doing great</p>
                    </div>
                </div>
                <div className="flex items-center rounded-lg bg-base-100 border-2 border-secondary p-4">
                    <figure>
                        <Image height={70} width={70}
                            src="https://i.ibb.co.com/FDpGqc0/pp.jpg"
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">John English</h2>
                        <p>Doing great</p>
                    </div>
                </div>
                <div className="flex items-center rounded-lg bg-base-100 border-2 border-secondary p-4">
                    <figure>
                        <Image height={70} width={70}
                            src="https://i.ibb.co.com/FDpGqc0/pp.jpg"
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">John English</h2>
                        <p>Doing great</p>
                    </div>
                </div>
                <div className="flex items-center rounded-lg bg-base-100 border-2 border-secondary p-4">
                    <figure>
                        <Image height={70} width={70}
                            src="https://i.ibb.co.com/FDpGqc0/pp.jpg"
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">John English</h2>
                        <p>Doing great</p>
                    </div>
                </div>
                <div className="flex items-center rounded-lg bg-base-100 border-2 border-secondary p-4">
                    <figure>
                        <Image height={70} width={70}
                            src="https://i.ibb.co.com/FDpGqc0/pp.jpg"
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">John English</h2>
                        <p>Doing great</p>
                    </div>
                </div>
                <div className="flex items-center rounded-lg bg-base-100 border-2 border-secondary p-4">
                    <figure>
                        <Image height={70} width={70}
                            src="https://i.ibb.co.com/FDpGqc0/pp.jpg"
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">John English</h2>
                        <p>Doing great</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;