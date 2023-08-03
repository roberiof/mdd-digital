import {useEffect} from 'react'
import abstractWhite from '../assets/abstract-white.webp'
import employee from '../assets/employee.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

const AuxHomeSection = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className='bg-primary flex justify-center min-h-screen'>
        <div className='wrapper flex flex-col justify-center xl:justify-between gap-8'>
          <img src={abstractWhite} alt="" className='hidden xl:flex w-36' data-aos="zoom-in"/>
          <div className='flex flex-col xl:flex-row justify-between items-center gap-14'>
              <img src={employee} alt="Worker of MDD Digital e Cia" className='w-96 h-96 object-cover' data-aos="fade-right" data-aos-duration="500"/>
              <div className='flex flex-col gap-6 max-w-3xl' data-aos="fade-left" data-aos-duration="500">
                  <h2> Parcerias que impulsionam seu negócio. </h2>
                  <p className='font-bold text-xl text-justify'>A MDD Digital é uma agência digital inovadora e orientada para resultados, focada em ajudar empresas de todos os tamanhos a otimizar suas estratégias de marketing online. Nossa missão é proporcionar aos nossos clientes uma presença digital poderosa, que aumente a visibilidade de suas marcas e impulsione o crescimento dos seus negócios.</p>
              </div>
          </div>
        </div>
    </section>
  )
}

export default AuxHomeSection