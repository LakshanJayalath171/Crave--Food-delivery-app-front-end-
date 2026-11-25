import {useEffect, useState} from 'react'
import Admin_nav from '../components/Admin_nav'
import Admin_sidebar from '../components/Admin_sidebar'
import Dashbord_com from '../components/Dashbord_com'
import Products from '../components/Products'
import Promotions from '../components/Promotions'
import Categories from '../components/Categories'
import Orders from '../components/Orders'
import axiosInstance from '../api/axiosInstance'
import useCategoryStore from '../store/categoryStore'
import {socket} from '../lib/soket'
import { useAuthStore } from '../store/authStore'
import { Navigate } from 'react-router-dom'


const Dashboard = () => {

  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isLoading = useAuthStore((state) => state.isLoading);

  if(isLoading){
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <p className='text-2xl font-semibold'>Loading...</p>
      </div>
    )
  }

  if(!isAuthenticated ){
    return (
      <Navigate to="/admin/signin" replace />
    )
  }

  if(!user || user.role !== 'admin'){
    return (
      <Navigate to="/" replace />
    )
  }

  const categories = useCategoryStore((state) => state.categories);
  const setCategories = useCategoryStore((state) => state.setCategories);

  const getAllCategories = async () => {
    try{
      const response = await axiosInstance.get('admin/all-categories');
      setCategories(response.data.categories);
    }
    catch(error){
      console.error('Error fetching categories:', error);
    }
  }

  useEffect(() => {
    getAllCategories();

    socket.connect();

    return () => {
      socket.disconnect();
    }
  },[])

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