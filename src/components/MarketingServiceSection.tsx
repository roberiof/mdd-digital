import socialMediaManagement from '../assets/social-media-management.jpg'
import {useEffect, useRef} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const MarketingServiceSection = () => {
    const zapLink = useRef<HTMLAnchorElement>(document.createElement('a'))

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className='bg-secondary relative h-150 sm:h-screen xl:flex'>
            <div className=" wrapper flex flex-col text-center xl:text-start xl:flex-row m-auto py-0 items-center h-2/3 justify-center xl:justify-start">
                <div className='text-black flex flex-col gap-8 xl:w-1/2 xl:pr-28'>
                    <h2 className='mb-10' data-aos='fade-up'> Marketing para redes sociais </h2>
                    <p data-aos='fade-up'> Impulsione sua marca online com nosso marketing inovador para redes sociais. Estratégias personalizadas, gestão diária de contas, conteúdo envolvente e campanhas estratégicas para aumentar conversões e vendas. Alcance o sucesso digital conosco! </p>
                    <div>
                        <button id="saiba mais" className='saibaMaisBtn w-1/2 m-auto xl:m-0' data-aos="flip-left" onClick={() => zapLink?.current.click()}> saiba mais  </button>
                        <a href="https://api.whatsapp.com/send/?phone=558899620850&text=Venho+do+site+e+quero+conhecer+mais+sobre+seu+servi%C3%A7o+para+cria%C3%A7%C3%A3o+de+sites" aria-label="Vá para o nosso Whats App para saber mais" ref={zapLink} className="hidden"></a>
                    </div>
                </div>
            </div>
            <img src={socialMediaManagement} alt="Phone showing main social medias" className='absolute object-cover w-full h-1/3 bottom-0 shadow-2xl xl:w-1/2 xl:h-full xl:right-0' data-aos="zoom-in"/>
        </section>
    )
}

export default MarketingServiceSection