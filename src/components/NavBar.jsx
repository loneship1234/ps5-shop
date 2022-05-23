import React from 'react'
// 
import {HiMenuAlt3} from 'react-icons/hi';
import ShoppingBag from '../img/shopping-bag.png';
import Logo from '../img/sony-logo-3066.png';
import Footer from './Footer';
import ToTopButton from './ToTopButton'
import {Card} from './card';
import {MdVideogameAsset} from 'react-icons/md';
import {RiHome5Fill,RiAccountCircleFill,RiCustomerService2Fill} from 'react-icons/ri';
import {FaNewspaper} from 'react-icons/fa';
import {IoHardwareChip,IoLogIn,IoLogOut} from 'react-icons/io5';

// 
function NavBar() {
  return (
    // <nav className='flex items-center w-full h-20 px-9 justify-end font-semiBold ' >
    //     <img src={Logo} className='w-28 justify-end mr-auto' alt="" />
    //     <a href="#" id='a' className='mr-20 a'>Games</a>
    //     <a href="#" id='a' className='mr-20 a'>Hardware</a>
    //     <a href="#" id='a' className='mr-20 a'>Services</a>
    //     <a href="#" id='a' className='mr-20 a'>News</a>
    //     <img src={ShoppingBag} className='w-6 -ml-6 cursor-pointer'  alt="shopping-bag" />
    //     <HiMenuAlt3 className=''/>
    // </nav>
    <div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col">
    <div class="w-full navbar bg-base-100">
         <img src={Logo} className=' ml-3 w-28 justify-end mr-auto' alt="" />
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="">
        <HiMenuAlt3  className='btn btn-square btn-ghost w-'/>
        </label>
      </div> 
      <div class="flex-none hidden lg:block font-semiBold">
        <ul class="menu menu-horizontal">
        <a href="#" id='a' className='mr-20 a'>Games</a>
        <a href="#" id='a' className='mr-20 a'>Hardware</a>
        <a href="#" id='a' className='mr-20 a'>Services</a>
        <a href="#" id='a' className='mr-20 a'>News</a>
        <img src={ShoppingBag} className='w-6 -ml-6 cursor-pointer'  alt="shopping-bag" />
        </ul>
      </div>
    </div>
 
    <ToTopButton/>
   <Card game='ghost of tsushima' theme='light'  badgeColor='bg-gray-300 text-black' category_1='action' category_2='open world' isNew={true}  text='this game is very good please buy it and make me milionare'/>
    {/* <Card game='ghost of tsushima' theme='light'  badgeColor='bg-gray-300 text-black' category_1='action' category_2='open world' isNew={true}  text='this game is very good please buy it and make me milionare'/>  */}
   {/* <Card game='ghost of tsushima' theme='light'  badgeColor='bg-gray-300 text-black' category_1='action' category_2='open world' isNew={true}  text='this game is very good please buy it and make me milionare'/> */}
   {/* <Card game='ghost of tsushima' theme='light'  badgeColor='bg-gray-300 text-black' category_1='action' category_2='open world' isNew={true}  text='this game is very good please buy it and make me milionare'/>  */}
<Footer/>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay right"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
         <img src={Logo} className=' ml-0 w-28 mb-7 justify-end mr-auto' alt="" />
         
        <div className='flex items-center hover:bg-gray-200 rounded-md mb-2'> <RiHome5Fill className='w-7 h-5'/> <a href="#" id='a' className='mr-20 mt-1 text-lg ml-1 mb-2'>Home</a></div>
        <div className='flex items-center hover:bg-gray-200 rounded-md mb-2'> <MdVideogameAsset className='w-7 h-5'/> <a href="#" id='a' className='mr-20 mt-1 text-lg ml-1 mb-2'>Games</a></div>
        <div className='flex items-center hover:bg-gray-200 rounded-md mb-2'> <IoHardwareChip className='w-7 h-5'/> <a href="#" id='a' className='mr-20 mt-1 text-lg ml-1 mb-2'>Hardware</a></div>
        <div className='flex items-center hover:bg-gray-200 rounded-md mb-2'> <RiCustomerService2Fill className='w-7 h-5'/> <a href="#" id='a' className='mr-20 mt-1 text-lg ml-1 mb-2'>Services</a></div>
        <div className='flex items-center hover:bg-gray-200 rounded-md mb-2'> <FaNewspaper className='w-7 h-5'/> <a href="#" id='a' className='mr-20 mt-1 text-lg ml-1 mb-2'>News</a></div>
        <div className='flex items-center hover:bg-gray-200 rounded-md mb-3'> <RiAccountCircleFill className='w-7 h-5'/> <a href="#" id='a' className='mr-20 mt-1 text-lg ml-1 mb-2'>Account</a></div>
       
        <hr />
        
       <div className='flex items-center mt-3 hover:bg-gray-200 rounded-md'> <IoLogIn className='w-7 h-5'/> <a href="#" id='a' className='mr-20 mt-1 text-lg ml-1 mb-2'>login</a></div>
       <div className='flex items-center hover:bg-gray-200 rounded-md mt-2'> <IoLogOut className='w-7 h-5'/> <a href="#" id='a' className='mr-20 mt-1 text-lg ml-1 mb-2'>logout</a></div>
      
    </ul>
    
  </div>
</div>
  )
}

export default NavBar