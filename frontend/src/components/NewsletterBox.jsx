import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler =(event) => {
        event.preventDefault();
    }
  return (
    <div className=' text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio deleniti iste saepe ab aut, tenetur laboriosam omnis aspernatur cum nam quibusdam, repudiandae qui. Facilis vel asperiores expedita animi sunt.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'
        
        >
            <input className='w-full sm:flex-1 outline-none rounded' type="email" placeholder='Enter your email' required/>
            <button type ='submit' className='bg-black text-white text-xs px-10 py-4 rounded cursor-pointer  hover:bg-black-800 hover:scale-105 transition-all duration-300 '> SUBSCRIBE </button>
        </form>
    </div>
  )
}

export default NewsletterBox