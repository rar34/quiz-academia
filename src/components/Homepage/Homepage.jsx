import React from 'react';
import Banner from './Banner';
import Leaderboard from './LeaderBoard';

const Homepage = () => {
    return (
        <div className='bg-base-200'>
            <div className=' py-10 min-h-[65vh]'>
                <Banner />
                <Leaderboard />
            </div>
        </div>
    );
};

export default Homepage;