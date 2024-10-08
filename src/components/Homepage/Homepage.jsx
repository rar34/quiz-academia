import React from 'react';
import Banner from './Banner';

const Homepage = () => {
    return (
        <div className='bg-slate-200'>
            <div className='container mx-auto py-10 min-h-[65vh]'>
                <Banner />
            </div>
        </div>
    );
};

export default Homepage;