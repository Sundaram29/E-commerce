import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className='text-2xl text-center pt-8 border-t'>
      <div>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to FOREVER, your go-to destination for quality, style, and trust. At FOREVER, we believe shopping should be simple, enjoyable, and inspiring. Our mission is to bring you carefully curated products that combine modern trends, premium quality, and great value — all in one place.

            </p>
          <p>At FOREVER, our customers are at the heart of everything we do. We don’t just sell products — we build long-term relationships based on trust, transparency, and satisfaction.

            Thank you for choosing FOREVER. We’re excited to be part of your journey — today and always.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>At FOREVER, our mission is to make everyday shopping simple, reliable, and enjoyable. We strive to deliver high-quality products at fair prices while creating a seamless online shopping experience our customers can trust.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'Why'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance: </b>
          <p className='text-gray-600'>We meticulously select and vet eaxh product to ensure it meets our stringent quality standards.Whether you need help with an order, sizing advice, or returns, we’re committed to making your experience smooth and satisfying. We don’t just provide service — we build relationships based on trust, care, and reliability, so you can shop with complete confidence at Forever Collection.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>At Forever Collection, we believe shopping should be simple, fast, and stress-free. Our user-friendly platform lets you browse, select, and purchase your favorite styles anytime, anywhere. With easy navigation, secure payment options, and quick checkout, we make sure your shopping experience is smooth from start to finish.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service: </b>
          <p className='text-gray-600'>At Forever Collection, our customers are at the heart of everything we do. Our dedicated support team is always ready to assist you with personalized care, quick responses, and helpful solutions.</p>
        </div>
        

      </div>
      <NewsletterBox/>
    </div>


  )
}

export default About