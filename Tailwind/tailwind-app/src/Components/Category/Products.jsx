import React from 'react'
import { coffees } from '../../data'

const Products = () => {
  return (
    <div className='py-8 px-8 md:py-16 md:px-12'>
      <h1 className='text-3xl text-center font-bold mb-4 text-primaryColor'>Savor a fresh coffee blend</h1>
      <h6 className='text-base text-center mb-6 text-gray-500 md:mb-12'>Come sample every coffee flavor with us. Every day brings a fresh cup that is worth trying</h6>
      <div className='grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-[80%] lg:m-auto'>
        {coffees.map(coffee => (
          <div key={coffee.id} className='bg-cardColor bg-b border border-primaryColor rounded-xl rounded-t-none pb-10 text-center text-primaryColor relative mb-5'>
            <div>  
              <div className='min-w-[200px] h-[220px] flex justify-center bg-slate-400 mb-3 lg:h-[185px]'>
                <img src={coffee.image} alt='' className='w-[100%] h-[100%]'/>
              </div>
              <h5 className='text-xl font-bold mb-4'>{coffee.name}</h5>
              <h4 className='text-3xl'>${(coffee.priceCents / 100).toFixed(2)}</h4>
            </div>
            <div className='w-full absolute right-0 -bottom-6'>
              <button className='bg-black rounded-3xl py-3 px-5 hover:bg-primaryColor hover:text-black duration-500 ease-in-out cursor-pointer'>Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products