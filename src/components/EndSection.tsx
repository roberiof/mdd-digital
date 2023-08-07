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
            <div className='wrapper m-auto flex flex-col lg:flex-row h-full relative justify-between gap-8'>
                <div className='flex flex-col justify-between w-full lg:w-1/2 z-20'>
                    <h2 data-aos="zoom-out">Vamos levar sua empresa para o próximo nível.</h2>
                    <img data-aos="zoom-in" src={abstractBlue} alt="Abstract Logo" className='w-36 hidden lg:flex'/>
                </div>  
                <div className='w-full lg:w-1/2 relative h-2/3 lg:h-full'>
                    <iframe data-aos="zoom-out" className="w-full h-1/3 absolute top-0 md:hidden xl:h-72 2xl:flex xl:my-0 xl:absolute xl:top-0 xl:right-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467690.14386865456!2d-46.92495573160536!3d-23.682063556622076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1691426097328!5m2!1spt-BR!2sbr" width="600" height="450" style={{border:'0'}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className='flex flex-col justify-end z-20 absolute bottom-0 w-full md:right-0 lg:w-min 2xl:w-full' data-aos="fade-left">
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
                                    <a href="https://www.facebook.com/" aria-label="Vá ao nosso Facebook" target="_blank" className='w-12 mb-2 cursor-pointer hover:scale-110'> <FaFacebookF size={'2rem'}/> </a>
                                    <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D" aria-label="Vá ao nosso Twitter" className='w-12 mb-2 cursor-pointer hover:scale-110' target="_blank"> <FaTwitter size={'2rem'}/> </a>
                                    <a href="https://www.instagram.com/" aria-label="Vá ao nosso Instagram" target="_blank" className='w-12 mb-2 cursor-pointer hover:scale-110'> <FaInstagram size={'2rem'}/> </a>
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