import Image from 'next/image';
import React from 'react';

const Leaderboard = () => {
    return (
        <div className="container mx-auto">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <Image height={100} width={100}
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;