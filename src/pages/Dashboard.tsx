import React from 'react'
import Admin_nav from '../components/Admin_nav'
import Admin_sidebar from '../components/Admin_sidebar'

const Dashboard = () => {
  return (
    <div>
        {/* Navbar */}
        <Admin_nav/>

        <div className='flex gap-3'>
            {/* sidebar */}
            <div className='w-1/4'>
                <Admin_sidebar/>
            </div>

            {/* content */}
            <div className='w-3/4'>contentn</div>
        </div>
    </div>
  )
}

export default Dashboard