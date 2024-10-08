import React from 'react';
import Banner from './Banner';
import LeaderBoard from './Leaderboard';

const Homepage = () => {
    return (
        <div className='bg-base-200'>
            <div className=' py-10 min-h-[65vh]'>
                <Banner />
                <LeaderBoard />
            </div>
        </div>
    );
};

export default Homepage;