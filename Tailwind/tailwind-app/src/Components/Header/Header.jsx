import React, { useState } from 'react'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [currentMenu, setCurrentMenu] = useState('home')

  return (
    <>
      <header className='bg-secondaryColor w-full fixed -top-1 left-0 py-3 z-50'>
        <nav className='w-full text-whiteColor h-12 relative flex justify-between items-center px-5 md:px-16'>
          <h2 className='text-2xl italic font-[800]'>Brew</h2>
          <div className='flex items-center gap-7'>
            <div className={`text-xs bg-white absolute top-14 left-0 py-10 w-full h-64 border-black border-b ${showMenu ? '' : 'transform translate-x-full md:translate-x-0'} duration-300 ease-in-out md:static md:block md:h-auto md:py-0 md:bg-transparent md:border-none`} id='manuId'>
              <ul className='flex flex-col text-center gap-5 md:flex-row'>
                <li onClick={()=>setCurrentMenu('home')} className={`${currentMenu === 'home' ? 'text-primaryColor' : 'text-secondaryColor md:text-whiteColor'} md:px-5`}><a href='#home'>Home</a></li>
                <li onClick={()=>setCurrentMenu('about-us')} className={`${currentMenu === 'about-us' ? 'text-primaryColor' : 'text-secondaryColor md:text-whiteColor'} md:px-5`}><a href='#about'>About Us</a></li>
                <li onClick={()=>setCurrentMenu('menu')} className={`${currentMenu === 'menu' ? 'text-primaryColor' : 'text-secondaryColor md:text-whiteColor'} md:px-5`}><a href='#menu'>Menu</a></li>
                <li onClick={()=>setCurrentMenu('review')} className={`${currentMenu === 'review' ? 'text-primaryColor' : 'text-secondaryColor md:text-whiteColor'} md:px-5`}><a href='#review'>Review</a></li>
                <li onClick={()=>setCurrentMenu('contact')} className={`${currentMenu === 'contact' ? 'text-primaryColor' : 'text-secondaryColor md:text-whiteColor'} md:px-5`}><a href='#contact'>Contact</a></li>
              </ul>
            </div>
            <div className='flex items-center gap-4'>
              <button className='text-xs border border-whiteColor rounded-3xl py-1 px-4 hover:bg-whiteColor hover:text-secondaryColor cursor-pointer ease-in-out duration-500'>Signup</button>
              <div className='md:hidden' onClick={()=>setShowMenu(!showMenu)}>
                { showMenu ? <i class='bx bx-x text-2xl'></i> : <i class='bx bx-menu text-3xl'></i> }
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header