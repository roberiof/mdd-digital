import {useEffect} from 'react'

import endBg from '../assets/end-bg.jpg'
import abstractBlue from '../assets/abstract-blue.webp'

import {FaFacebookF , FaTwitter, FaInstagram} from 'react-icons/fa'

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.css';

const EndSection = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className='bg-OutBody bg-cover h-150 sm:h-screen relative' style={{backgroundImage: `url(${endBg})`}}>
            <div className='absolute bg-black w-full h-full top-0 left-0 opacity-50 z-0'></div>
            <div className='wrapper m-auto flex flex-col lg:flex-row h-full relative justify-between'>
                <div className='flex flex-col justify-between w-full lg:w-1/2 z-20'>
                    <h2 data-aos="zoom-out">Vamos levar sua empresa para o próximo nível.</h2>
                    <img data-aos="zoom-in" src={abstractBlue} alt="" className='w-36 hidden lg:flex'/>
                </div>  
                <div className='w-full lg:w-1/2 relative'>
                    <div className='flex flex-col justify-end z-20 lg:absolute lg:right-0 lg:bottom-0' data-aos="fade-left">
                        <h2 className='mb-4 underline'> Entre em contato! </h2>
                        <div className='flex justify-start gap-8'>
                            <div className='flex flex-col gap-4'>
                                <p>Telefone</p>
                                <p>E-mail</p>
                                <p>Redes</p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p>(12) 3456-7890</p>
                                <p>mdd@gmail.com.br</p>
                                <div className='flex gap-4 items-center'>
                                    <a href="https://www.facebook.com/" target="_blank" className='w-12 mb-2 cursor-pointer hover:scale-110'> <FaFacebookF size={'2rem'}/> </a>
                                    <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D" className='w-12 mb-2 cursor-pointer hover:scale-110' target="_blank"> <FaTwitter size={'2rem'}/> </a>
                                    <a href="https://www.instagram.com/" target="_blank" className='w-12 mb-2 cursor-pointer hover:scale-110'> <FaInstagram size={'2rem'}/> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EndSection