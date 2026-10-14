import {useState} from 'react'
import Admin_nav from '../components/Admin_nav'
import Admin_sidebar from '../components/Admin_sidebar'
import Dashbord_com from '../components/Dashbord_com'
import Products from '../components/Products'
import Promotions from '../components/Promotions'
import Categories from '../components/Categories'
import Orders from '../components/Orders'

const Dashboard = () => {

  const [activeComponent, setActiveComponent] = useState('dashboard')

  return (
    <div className='w-full h-screen overflow-hidden flex flex-col'>
        {/* Navbar */}
        <div className='flex-none'>
          <Admin_nav/>
        </div>

        <div className='flex flex-1 min-h-0 gap-3'>
            {/* sidebar */}
            <div className='w-1/5'>
                <Admin_sidebar activeCom={activeComponent} setAct={setActiveComponent}/>
            </div>

            {/* content */}
            <div className='w-4/5 min-h-0 overflow-y-auto pr-10'>
              {activeComponent === 'dashboard' && <Dashbord_com/>}
              {activeComponent === 'products' && <Products/>}
              {activeComponent === 'promotions' && <Promotions/>}
              {activeComponent === 'categories' && <Categories/>}
              {activeComponent === 'orders' && <Orders/>}
            </div>
        </div>
    </div>
  )
}

export default Dashboard