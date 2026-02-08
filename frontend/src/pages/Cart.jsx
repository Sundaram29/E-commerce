import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
const Cart = () => {

    const{products, currency, cartItems, updateQuantity, navigate, getCartCount} = useContext(ShopContext);

    const [cartData, setCartData] = useState([]);

    useEffect(()=>{
      if(products.length >0){
        const tempData= [];
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item]>0){
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            })
          }
        }
      }
      setCartData(tempData);
      }
    }, [cartItems, products])

  return getCartCount() ?(
    <div className='border-t pt-14'>
        <div className='text-2xl mb-3'>
            <Title text1={'YOUR'} text2={'CART'} />
        </div>

        <div>
          {
            cartData.map((item, index)=>{

              const productData = products.find((product)=> product._id === item._id);

              return (
                
                <div key ={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                  <div className='flex items-start gap-6'>
                      <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                      <div>
                        <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                        <div className='flex item-center gap-5 mt-2'>
                              <p>{currency}{productData.price}</p>
                              <p className='px-2 sm:px-3 sm:py-1 border bg-slate-100'>{item.size}</p>
                        </div>
                      </div>
                  </div>
                  <input onChange={(e)=>e.target.value === '' || e.target.value === '0'? null : updateQuantity(item._id, item.size,Number(e.target.value) )} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 ' type="number" min={1} defaultValue={item.quantity} />
                  <img onClick={()=>updateQuantity(item._id, item.size, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />

                </div>
              ) 

            })
          }

        </div>

        <div className='flex justify-end my-20'>
          <div className='w-full sm:w-[450px]'>
              <CartTotal />
              <div className='w-full text-end'>
                  <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3 cursor-pointer'>PROCEED TO CHECKOUT</button>
              </div>
          </div>
        </div>
    </div>
  ):  <div className="w-full px-4 sm:px-12">

  <div className="flex flex-col sm:flex-row sm:justify-between gap-8">

    {/* LEFT: Image + Empty Text */}
    <div className="flex flex-col items-center sm:items-start order-1 sm:order-1">

      <img
        className="h-32 sm:h-auto w-auto sm:w-150 object-contain sm:my-10"
        src={assets.EMptycard}
        alt="Empty Cart"
      />

      <div className="mt-4 text-center sm:text-left">
        <p className="text-3xl sm:text-5xl font-semibold my-2 sm:mx-60">
          UH-OH!
        </p>
        <p className="text-base sm:text-xl font-medium text-gray-500 sm:mx-60">
          YOUR CART IS EMPTY
        </p>
      </div>
    </div>

    {/* RIGHT: Collection CTA (MOVED BELOW EMPTY ON MOBILE) */}
    <div className="order-2 sm:order-2 text-center sm:text-left max-w-xl mt-4 sm:mt-0 sm:mt-40">

      <p className="text-lg sm:text-xl font-semibold text-gray-800 sm:my-5 ">
        Discover the Forever Collection — your style starts here
      </p>

      <div className="mt-4 flex justify-center sm:justify-start">
        <button
          onClick={() => navigate('/collection')}
          className="rounded-lg bg-yellow-800 
          px-5 py-3 font-semibold text-amber-50
          hover:bg-blue-500 transition-all duration-300
          hover:scale-105 active:scale-95 cursor-pointer"
        >
          ➤ GO TO COLLECTION PAGE
        </button>
      </div>

    </div>

  </div>

</div>

      
}

export default Cart