import React from 'react'
import { useAuth } from '../provider/auth-provider';
import Dropdown from './dropdown';
// import Dropdown from './dropdown';
const UserPage = () => {
    const {userData,pages}=useAuth();
  return (
    <div className=' w-screen flex flex-col justify-center items-center h-screen  '>

        <div className='flex items-center gap-3  '>
        <h2 className='lg:text-5xl  p-4 text-3xl font-semibold'>
           Welcome: {userData?.name}
            </h2> 
        <img src={userData?.picture?.data.url} className="   rounded-full aspect-square\" alt="" />
        </div>
        
        <Dropdown pages={pages}/>
    </div>
  )
}

export default UserPage