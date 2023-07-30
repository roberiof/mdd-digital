import React from 'react'
import abstractWhite from '../assets/abstract-white.png'
import employee from '../assets/employee.jpg'

const AuxHomeSection = () => {
  return (
    <section className='bg-primary py-12 px-8 md:px-28 text-white min-h-screen flex flex-col justify-between gap-8 '>
        <img src={abstractWhite} alt="" className='hidden lg:flex w-36'/>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-24'>
            <img src={employee} alt="Worker of MDD Digital e Cia" className='w-5/6 w-96 h-96 object-cover'/>
            <div className='flex flex-col gap-6'>
                <h2> Parcerias que impulsionam seu negócio. </h2>
                <p className='font-bold text-xl'>A MDD Digital é uma agência digital inovadora e orientada para resultados, focada em ajudar empresas de todos os tamanhos a otimizar suas estratégias de marketing online. Nossa missão é proporcionar aos nossos clientes uma presença digital poderosa, que aumente a visibilidade de suas marcas e impulsione o crescimento dos seus negócios.</p>
            </div>
        </div>
    </section>
  )
}

export default AuxHomeSection