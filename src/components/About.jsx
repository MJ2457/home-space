import React from 'react'
import aboutImage from '../assets/about.webp'
const About = () => {
  return (
    <section className='max-w-7xl mx-auto border-b-2 mt-20' id='about'>
        <h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4'>
            About
        </h2>
        <div className='flex flex-col items-center lg:space-x-8 mx-4 mb-20'>
            <div className='mb-8 lg:mb-0'>
                <img src={aboutImage} alt="About VastuSpaze" className='w-full h-auto' />
            </div>
            <p className='text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8'>
                At Home-Space, we believe that everyone deserves a home that is both functional and beautiful. We offer a wide range of services to help you create the perfect space for your needs. Whether you are looking to renovate your kitchen, bathroom, or entire home, we have the expertise and experience to make your vision a reality. Our team of designers will work with you every step of the way to ensure that your home is everything you want it to be. Contact us today to learn more about our services and how we can help you create the home of your dreams.
            </p>
        </div>
    </section>
  )
}

export default About