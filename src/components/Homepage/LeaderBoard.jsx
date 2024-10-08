import Image from 'next/image';
import React from 'react';

const Leaderboard = () => {
    return (
        <div className="container mx-auto my-14">
            <h2 className="text-5xl my-14 text-center border-b-2 pb-4 font-semibold text-primary">Leader Board</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card card-side bg-base-100 border-2 border-secondary p-4">
                    <figure>
                        <Image height={100} width={100}
                            src="https://i.ibb.co.com/FDpGqc0/pp.jpg"
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">John English</h2>
                        <p>Doing great</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 border-2 border-secondary p-4">
                    <figure>
                        <Image height={100} width={100}
                            src="https://i.ibb.co.com/FDpGqc0/pp.jpg"
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">John English</h2>
                        <p>Doing great</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 border-2 border-secondary p-4">
                    <figure>
                        <Image height={100} width={100}
                            src="https://i.ibb.co.com/FDpGqc0/pp.jpg"
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">John English</h2>
                        <p>Doing great</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 border-2 border-secondary p-4">
                    <figure>
                        <Image height={100} width={100}
                            src="https://i.ibb.co.com/FDpGqc0/pp.jpg"
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">John English</h2>
                        <p>Doing great</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 border-2 border-secondary p-4">
                    <figure>
                        <Image height={100} width={100}
                            src="https://i.ibb.co.com/FDpGqc0/pp.jpg"
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">John English</h2>
                        <p>Doing great</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 border-2 border-secondary p-4">
                    <figure>
                        <Image height={100} width={100}
                            src="https://i.ibb.co.com/FDpGqc0/pp.jpg"
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">John English</h2>
                        <p>Doing great</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 border-2 border-secondary p-4">
                    <figure>
                        <Image height={100} width={100}
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