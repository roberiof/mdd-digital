import React from 'react'
import { Disclosure } from '@headlessui/react'

const FAQSection = () => {
    return (
        <section className='bg-secondary h-150 sm:h-screen'>
            <div className="wrapper bg-black m-auto h-full">
                <h2 className='text-center'> FAQ </h2>
            <Disclosure>
                <Disclosure.Button className="py-2">
                Is team pricing available?
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500">
                Yes! You can purchase a license that you can share with your entire
                team.
                </Disclosure.Panel>
            </Disclosure>

            </div>
        </section>

    )
}

export default FAQSection