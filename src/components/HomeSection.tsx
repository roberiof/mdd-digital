import { useEffect } from 'react';
import TypingEffect from './TypingEffect'
import homeBg from '../assets/home-bg.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeSection = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className='bg-gray-900 min-h-screen overflow-hidden bg-cover flex justify-between items-center flex-col py-20 text-white relative' style={{backgroundImage: `url(${homeBg})`}}>  
      <div className='absolute bg-black w-full h-full top-0 left-0 opacity-50 z-0'></div>

      <p className='text-xl  font-medium z-10' data-aos="zoom-in"> Conheça nossas soluções. </p>
      <div className='z-20 mx-5 text-center' data-aos="fade-up"> 
        <h1 className='mb-2'> Alavanque <br/> sua empresa </h1>
        <TypingEffect containerStyles="text-2xl font-semibold" text="com estratégias de marketing que funcionam"/>
      </div>
      <p className='font-medium z-10 hover:underline' data-aos="zoom-in"> MDD Digital e Cia </p>

    </section>
  )
}

export default HomeSection