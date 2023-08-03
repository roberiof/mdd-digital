import {useContext, useEffect} from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.css';

import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'
import work4 from '../assets/work4.png'
import work5 from '../assets/work5.png'
import work6 from '../assets/work6.png'
import { LinkContext } from '../context/LinkContext';

const WorkSection = () => {

    const { worksSection } = useContext(LinkContext)

    useEffect(() => {
        AOS.init();
    }, [])

  return (
    <section className='bg-white' ref={worksSection}>
        <div className='wrapper m-auto text-center'>
            <h2 className='text-primary mb-16'> Nossos trabalhos </h2>
            <div className='border-primary w-full flex flex-wrap gap-16 justify-center'>
                <div className='border border-primary w-full sm:w-1/4 p-4 rounded-md cursor-pointer' data-aos="flip-right">
                    <img src={work1} alt="Shopping Online Store Logo"/>  
                    <p className='text-black mt-5 hover:underline'> Shopping Online Store </p>
                </div>      
                <div className='border border-primary w-full sm:w-1/4 p-4 rounded-md cursor-pointer' data-aos="flip-right">
                    <img src={work2} alt="Albuquerque Streamer Logo"/>  
                    <p className='text-black mt-5 hover:underline'> Albuquerque Streamer </p>
                </div>      
                <div className='border border-primary w-full sm:w-1/4 p-4 rounded-md cursor-pointer' data-aos="flip-right">
                    <img src={work3} alt="Borcelle Fashion Logo"  />  
                    <p className='text-black mt-5 hover:underline'> Borcelle Fashion </p>
                </div>      
                <div className='border border-primary w-full sm:w-1/4 p-4 rounded-md cursor-pointer' data-aos="flip-right">
                    <img src={work4} alt="Fábio Marques Logo"  />  
                    <p className='text-black mt-5 hover:underline'> Fábio Marques </p>
                </div>      
                <div className='border border-primary w-full sm:w-1/4 p-4 rounded-md cursor-pointer' data-aos="flip-right">
                    <img src={work5} alt="Estela Duarte Logo"/>  
                    <p className='text-black mt-5 hover:underline'> Estela Duarte </p>
                </div>      
                <div className='border border-primary w-full sm:w-1/4 p-4 rounded-md cursor-pointer' data-aos="flip-right">
                    <img src={work6} alt="Barbearia Hannover e Tavares Logo"/>  
                    <p className='text-black mt-5 hover:underline'> Barbearia Hannover e Tavares </p>
                </div>      
            </div>
        </div>
    </section>
  )
}

export default WorkSection