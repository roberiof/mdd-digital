import emailManagement from '../assets/email-management.jpg'
import {useEffect, useRef} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const EmailServiceSection = () => {
    const zapLink = useRef<HTMLAnchorElement>(document.createElement('a'))
    
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className='bg-secondary relative bg-secondary relative h-150 sm:h-screen xl:flex'>
            <div className="wrapper flex flex-col text-center xl:text-start xl:flex-row m-auto py-0 items-center h-2/3 justify-center xl:justify-end">
                <img src={emailManagement} className='absolute object-cover w-full h-1/3 bottom-0 shadow-2xl xl:w-1/2 xl:h-full xl:left-0' data-aos="zoom-in"/>
                <div className='text-black flex flex-col gap-8 xl:w-1/2 xl:pl-28'>
                    <h2 className='mb-10' data-aos="fade-up"> Email Marketing </h2>
                    <p data-aos="fade-up"> Maximize seus resultados com nosso serviço de email marketing exclusivo. Nossos templates profissionais e envolventes combinados com estratégias personalizadas alcançarão seu público no momento certo. Através da automação inteligente, nutriremos relacionamentos e otimizaremos constantemente suas campanhas com base em análises detalhadas.</p>
                    <div>
                        <button className='saibaMaisBtn w-1/2 m-auto xl:m-0' data-aos="flip-left" onClick={() => zapLink?.current.click()}> saiba mais  </button>
                        <a href="https://api.whatsapp.com/send/?phone=558899620850&text=Venho+do+site+e+quero+conhecer+mais+sobre+seu+servi%C3%A7o+para+cria%C3%A7%C3%A3o+de+sites" ref={zapLink} className="hidden"></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EmailServiceSection