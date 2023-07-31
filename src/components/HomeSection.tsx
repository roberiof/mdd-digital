import TypingEffect from './TypingEffect'
import homeBg from '../assets/home-bg.jpg'

const HomeSection = () => {
  return (
    <section className='bg-gray-900 min-h-screen overflow-hidden bg-cover flex justify-between items-center flex-col py-20 text-white relative' style={{backgroundImage: `url(${homeBg})`}}>  
      <div className='absolute bg-black w-full h-full top-0 left-0 opacity-50 z-0'></div>

      <p className='text-xl  font-medium z-10'> Conheça nossas soluções. </p>
      <div className='z-20 mx-5 text-center'>
        <h1 className='mb-2'> Alavanque <br/> sua empresa </h1>
        <TypingEffect containerStyles="text-2xl font-semibold" text="com estratégias de marketing que funcionam"/>
      </div>
      <p className='font-medium z-10 hover:underline'> MDD Digital e Cia </p>

    </section>
  )
}

export default HomeSection