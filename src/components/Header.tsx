import { useState, useRef, useEffect, useContext, MouseEvent} from 'react'
import logo_name from '../assets/logo-name.webp'
import zap from '../assets/zap.png'
import { LinkContext } from '../context/LinkContext'

const Header = () => {
    const [ IsMenuOpened , setIsMenuOpened ] = useState<boolean>(false)
    const zapLink = useRef<HTMLAnchorElement>(document.createElement("a"))
    const header = useRef<HTMLElement>(document.createElement("header"))

    const { servicesSection, worksSection , opinionsSection } = useContext(LinkContext)

    const scrollToSection = (e:MouseEvent<HTMLAnchorElement> , section:string, isHeader?:string) => {
        e.preventDefault()
        if (section === 'services'){
            servicesSection.current.scrollIntoView({ behavior: 'smooth' });
        }else if (section  === 'works'){
            worksSection.current.scrollIntoView({behavior: 'smooth'})
        } else if (section === 'opinions'){
            opinionsSection.current.scrollIntoView({behavior: 'smooth'})
        }
        
        if(isHeader === 'header'){
            setIsMenuOpened(false)
        }
    };

    useEffect( () =>{
        if(IsMenuOpened){
            header.current.style.position = 'fixed'
        } else{
            header.current.style.position = 'absolute'
        }

    }, [IsMenuOpened])

    return (
        <div className='z-40 mb-14'>
            <header className='bg-primary flex items-center justify-between px-6 md:px-14  shadow-xl w-full z-40' ref={header}>
                <img className='w-28 h-28' src={logo_name} alt="Mdd Digital Logo"/>
                <div className='flex text-white gap-8 items-center'>
                    <nav className='pb-6 gap-8 hidden md:flex'>
                            <a href="#" aria-label="Conheça os nossos serviços" className='headerLink' onClick={(e) => scrollToSection(e, 'services')}> Serviços </a>
                            <a href="#" aria-label="Conheça os nossos trabalhos" className='headerLink' onClick={(e) => scrollToSection(e, 'works')}> Trabalhos </a>
                            <a href="#" aria-label="Veja as opiniões de nossos clientes" className='headerLink' onClick={(e) => scrollToSection(e, 'opinions')}> Opiniões </a>
                    </nav>
                    <button id="burguerMenu" aria-label="Menu Hambúrguer" className={IsMenuOpened ? 'hiddenIcon hiddenIcon-active flex md:hidden' : 'hiddenIcon flex md:hidden'} onClick={() => setIsMenuOpened(!IsMenuOpened)}>
                        <div className='flex md:hidden  '></div>
                        <div className='flex md:hidden'></div>
                        <div className='flex md:hidden'></div>
                    </button>
                    <div>
                        <img src={zap} alt="Whats App Link" className='w-10 h-10 object-contain shadow-xl mb-1 hover:scale-125 transition-all cursor-pointer' onClick={() => zapLink.current.click()}/>
                        <a href="https://api.whatsapp.com/send/?phone=558899620850&text=Venho+do+site+e+quero+conhecer+mais+sobre+seu+servi%C3%A7o+para+cria%C3%A7%C3%A3o+de+sites" className='hidden' target="_blank" ref={zapLink}></a>
                    </div>
                </div>
            </header>

            <div className={IsMenuOpened ? 'hiddenMenu hiddenMenu-active' : 'hiddenMenu'}>
                <a href="#" aria-label="Conheça os nossos serviços" className='headerLink' onClick={(e) => scrollToSection(e, 'services', 'header')}> Serviços </a>
                <a href="#" aria-label="Conheça os nossos trabalhos" className='headerLink' onClick={(e) => scrollToSection(e, 'works', 'header')}> Trabalhos </a>
                <a href="#" aria-label="Veja as opiniões de nossos clientes" className='headerLink' onClick={(e) => scrollToSection(e, 'opinions', 'header')}> Opiniões </a>
            </div>
        </div>
    )
}

export default Header