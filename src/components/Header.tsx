import { useState, useRef } from 'react'
import logo_name from '../assets/logo_name.png'
import zap from '../assets/zap.png'

const Header = () => {
    const [ IsMenuOpened , setIsMenuOpened ] = useState<boolean>(false)
    const zapLink = useRef<HTMLAnchorElement>(document.createElement("a"))

    return (
        <div className='bg-primary flex items-center justify-between px-14 shadow-xl w-screen fixed'>
            <img className='w-32' src={logo_name} alt=""/>
            <div className='flex text-white gap-8 items-center'>
                <nav className='pb-6 gap-8 hidden md:flex'>
                    <a href=""> Serviços </a>
                    <a href=""> Trabalhos </a>
                    <a href=""> Opiniões </a>
                </nav>

                <button  className={IsMenuOpened ? 'hiddenIcon hiddenIcon-active flex md:hidden' : 'hiddenIcon flex md:hidden'} onClick={() => setIsMenuOpened(!IsMenuOpened)}>
                    <div className='flex md:hidden  '></div>
                    <div className='flex md:hidden'></div>
                    <div className='flex md:hidden'></div>
                </button>

                <img src={zap} alt="" className='w-10 object-contain shadow-xl mb-1 hover:scale-125 transition-all cursor-pointer' onClick={() => zapLink.current.click()}/>
                <a href="https://api.whatsapp.com/send/?phone=558899620850&text=Venho+do+site+e+quero+conhecer+mais+sobre+seu+servi%C3%A7o+para+cria%C3%A7%C3%A3o+de+sites" className='hidden' target="_blank" ref={zapLink}></a>
            </div>

            <div className={IsMenuOpened ? 'hiddenMenu hiddenMenu-active' : 'hiddenMenu'}>
                <a href=""> Serviços </a>
                <a href=""> Trabalhos </a>
                <a href=""> Opiniões </a>
            </div>
        </div>
    )
}

export default Header