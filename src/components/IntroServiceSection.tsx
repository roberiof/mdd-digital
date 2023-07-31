import abstractBlue from '../assets/abstract-blue.png'
import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const IntroServiceSection = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className='bg-white flex justify-center'>
            <div className="wrapper flex justify-between lg:items-end items-center flex-col lg:flex-row gap-20">
                <div className='flex flex-col justify-between h-full'>
                    <h2 className='text-primaryDarker lg:w-1/4 text-center lg:text-start'> Conheça nossos serviços </h2>
                    <img src={abstractBlue} className="hidden lg:flex w-36" data-aos='zoom-in'/>
                </div>
                
                <div className='flex flex-col w-full text-primaryDarker gap-8'>
                    <div className='border border-primaryDarker w-full  p-4 lg:p-12 flex items-center justify-between' data-aos="fade-up">
                        <p className='text-3xl lg:text-5xl w-1/3'> Redes Sociais </p>
                        <a href="https://api.whatsapp.com/send/?phone=558899620850&text=Venho+do+site+e+quero+conhecer+mais+sobre+seu+servi%C3%A7o+para+cria%C3%A7%C3%A3o+de+sites" className='hover:underline text-base lg:text-lg text-primaryDarker'> saiba mais </a>
                    </div>
                    <div className='border border-primaryDarker w-full  p-4 lg:p-12 flex items-center justify-between' data-aos="fade-up">
                        <p className='text-3xl lg:text-5xl w-1/3'> Marketing de Conteúdo </p>
                        <a href="https://api.whatsapp.com/send/?phone=558899620850&text=Venho+do+site+e+quero+conhecer+mais+sobre+seu+servi%C3%A7o+para+cria%C3%A7%C3%A3o+de+sites" className='hover:underline text-base lg:text-lg text-primaryDarker'> saiba mais </a>
                    </div>
                    <div className='border border-primaryDarker w-full p-4 lg:p-12 flex items-center justify-between' data-aos="fade-up">
                        <p className='text-3xl lg:text-5xl w-1/3'> Email Marketing </p>
                        <a href="https://api.whatsapp.com/send/?phone=558899620850&text=Venho+do+site+e+quero+conhecer+mais+sobre+seu+servi%C3%A7o+para+cria%C3%A7%C3%A3o+de+sites" className='hover:underline text-base lg:text-lg text-primaryDarker'> saiba mais </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroServiceSection