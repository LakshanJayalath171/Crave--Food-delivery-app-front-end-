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
    <div>
        {/* Navbar */}
        <Admin_nav/>

        <div className='flex gap-3'>
            {/* sidebar */}
            <div className='w-1/5'>
                <Admin_sidebar activeCom={activeComponent} setAct={setActiveComponent}/>
            </div>

            {/* content */}
            <div className='w-4/5'>
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