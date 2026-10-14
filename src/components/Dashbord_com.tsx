import { Clock, Hamburger, PaperBag, Receipt } from 'lucide-react'
import BlinkingDot from './Dot'

const Dashbord_com = () => {
  return (
    <div>
      {/* heading */}
      <div >
        <div className='flex items-center gap-2'>
          <BlinkingDot color='bg-orange-500' size='w-2 h-2'/>
          <p className="text-xs font-light text-primary">Live Kitchen Stream</p>
        </div>
        <h1 className='text-2xl font-bold text-main'>Admin Overview — Welcome back, Alex</h1>
        <p className="text-sm font-light text-secondary">
          Real-time kitchen management, dispatch status, and product catalogue.
        </p>
      </div>

      {/* card section */}
      <div className='grid grid-cols-4 gap-3 mt-4'>
        {/* reusable card component */}
        <div className='apple px-3 py-1 rounded-lg'>
          <div className='flex items-start justify-between'>
            <p className="text-sm font-light text-mainy">Total Menu<br/> Items</p>
            <div className='bg-orange-600/40 rounded-lg'>
              <Hamburger className='text-main m-2' size={20}/>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-main mt-4">34</h1>
        </div>

        <div className='apple px-3 py-1 rounded-lg'>
          <div className='flex items-start justify-between'>
            <p className="text-sm font-light text-mainy">Daily Gross<br/> Revenue</p>
            <div className='bg-orange-600/40 rounded-lg'>
              <Receipt className='text-main m-2' size={20}/>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-main mt-4">Rs. 384,500</h1>
        </div>

        <div className='apple px-3 py-1 rounded-lg'>
          <div className='flex items-start justify-between'>
            <p className="text-sm font-light text-mainy">Orders Today</p>
            <div className='bg-orange-600/40 rounded-lg'>
              <PaperBag className='text-main m-2' size={20}/>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-main mt-4">142</h1>
        </div>

        <div className='apple px-3 py-1 rounded-lg'>
          <div className='flex items-start justify-between'>
            <p className="text-sm font-light text-mainy">Pending Action</p>
            <div className='bg-orange-600/40 rounded-lg'>
              <Clock className='text-main m-2' size={20}/>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-main mt-4">8</h1>
        </div>
      </div>

      {/* incomming orders section */}
      <div className='flex items-center justify-between mt-4'>
        <div>
          <h1 className="text-xl font-bold text-main">Live Incoming Orders</h1>
          <p className='text-xs font-light text-secondary'>Real-time status updates and order routing control.</p>
        </div>
        <div className="flex items-center justify-end gap-1">
          {/* selected */}
          <div className='bg-orange-500 px-4 py-1 rounded-full text-xs text-on-dark cursor-pointer'>All (142)</div>

          {/* not selected */}
          <div className=' px-4 py-1 rounded-full text-xs text-main cursor-pointer'>Pending (8)</div>
          <div className=' px-4 py-1 rounded-full text-xs text-main cursor-pointer'>Preparing (14)</div>
          <div className=' px-4 py-1 rounded-full text-xs text-main cursor-pointer'>Transit (19)</div>
          <div className=' px-4 py-1 rounded-full text-xs text-main cursor-pointer'>Delivered (98)</div>
        </div>
      </div>
    </div>
  )
}

export default Dashbord_com