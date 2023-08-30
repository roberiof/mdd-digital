import { useEffect } from 'react'
import { Disclosure , Transition } from '@headlessui/react'
import { AiOutlinePlus , AiOutlineMinus } from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css';

const faq: Record<string, string> = { 
    "Como vocês escolhem os destinatários para os emails?":
         "Selecionamos os destinatários com base em critérios como histórico de interações, preferências declaradas e segmentação demográfica. Isso nos ajuda a enviar conteúdo relevante para cada grupo."
    ,"Que tipo de conteúdo vocês criam para as redes sociais?":
        "Nosso time cria uma variedade de conteúdos, incluindo postagens originais, imagens, vídeos e infográficos. Adaptamos o conteúdo para cada plataforma, mantendo a consistência da marca."
    ,"Como garantem a conformidade com regulamentos de privacidade?":
        "Levamos a conformidade a sério. Coletamos apenas dados relevantes e necessários, obtendo consentimento quando necessário. Mantemos políticas claras de privacidade e damos aos assinantes o controle sobre seus dados."
    ,"Como medem o sucesso das campanhas de email?":
        "Utilizamos métricas como taxa de abertura, taxa de cliques, taxa de conversão e taxa de cancelamento de inscrição para avaliar o desempenho das campanhas. Isso nos ajuda a ajustar nossas estratégias para obter melhores resultados."
    ,"Como monitoram e respondem aos comentários e mensagens dos seguidores?":
        "Utilizamos ferramentas de monitoramento para rastrear menções e comentários sobre sua marca. Respondemos a perguntas, comentários e mensagens de maneira oportuna, mantendo um diálogo positivo com os seguidores."
}

const FAQSection = () => {
        
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className='bg-white'>
            <div className="wrapper m-auto h-full">
                <h2 className='text-center text-primary'> FAQ </h2>
                <div className="mx-auto w-full max-w-screen-md rounded-2xl mt-16 flex flex-col gap-4">
                    {
                    Object.keys(faq).map( key => (
                        <div data-aos="fade-up">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between items-center rounded-lg bg-blue-100 px-4 py-2 text-left text-lg font-medium text-primary hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                            <span> {key}</span>
                                            <span>{ open ? <AiOutlineMinus/> : <AiOutlinePlus/>}</span>
                                        </Disclosure.Button>
                                        <Transition
                                            enter="transition duration-100 ease-out"
                                            enterFrom="transform scale-95 opacity-0"
                                            enterTo="transform scale-100 opacity-100"
                                            leave="transition duration-75 ease-out"
                                            leaveFrom="transform scale-100 opacity-100"
                                            leaveTo="transform scale-95 opacity-0"
                                        >
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                                              {typeof key === 'string' && faq[key]}
                                            </Disclosure.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                        ))
                    }
                   
                </div>
            </div>
        </section>

    )
}

export default FAQSection