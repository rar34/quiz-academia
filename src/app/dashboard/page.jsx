import Link from 'next/link';
import React from 'react';

const Dashboard = () => {
    return (
        <div className='min-h-[70vh] max-w-7xl mx-auto'>
            <div className='flex gap-6'>
                <div className='bg-primary text-white p-6 min-h-[85vh] w-1/4'>
                    side bar
                </div>
                <div className='w-3/4 p-14'>
                    content
                </div>
            </div>
        </div>
    );
};

export default Dashboard;