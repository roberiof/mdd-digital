import {useEffect} from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.css';

import client1 from '../assets/client1.jpg'
import client2 from '../assets/client2.jpg'
import client3 from '../assets/client3.jpg'

const ClientsSection = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className='bg-primaryDarker'>
            <div className="wrapper m-auto">
                <h2 className='mb-16 text-center'> Opinião dos clientes </h2>
                <div className='flex flex-col xl:flex-row items-center xl:justify-between gap-16'>
                    <div className='w-full sm:w-5/6 xl:w-1/4 flex flex-col gap-6'>
                        <div>
                            <p> Mary Gonçalves </p>
                            <p className='text-gray-300'> Borcelle Fashion </p>
                        </div>
                        <img src={client1} alt="" className='w-40 h-40 object-cover'/>
                        <p className='text-gray-300'> MDD Digital transformou nossa presença nas redes sociais. Eles criaram conteúdo incrível, aumentaram nosso engajamento e fizeram nossa marca brilhar!</p>
                    </div>
                    <div className='w-full sm:w-5/6 xl:w-1/4 flex flex-col gap-6'>
                        <div>
                            <p> Carlos Almeida </p>
                            <p className='text-gray-300'> Shopping Online Store</p>
                        </div>
                        <img src={client2} alt="" className='w-40 h-40 object-cover'/>
                        <p className='text-gray-300'>O serviço de automação da MDD Digital poupou nosso tempo e melhorou nossas conversões. Recomendo a todos que buscam resultados rápidos e eficientes!</p>
                    </div>
                    <div className='w-full sm:w-5/6 xl:w-1/4 flex flex-col gap-6'>
                        <div>
                            <p> Fábio Marques </p>
                            <p className='text-gray-300'> Corretor de Imóveis </p>
                        </div>
                        <img src={client3} alt="" className='w-40 h-40 object-cover'/>
                        <p className='text-gray-300'>A MDD Digital fez toda a diferença para nossa empresa! Suas campanhas de email foram altamente eficazes, levando mais clientes ao nosso site. O aumento nas vendas foi notável!</p>
                    </div>
                 
                </div>
            </div>
        </section>
    )
}

export default ClientsSection