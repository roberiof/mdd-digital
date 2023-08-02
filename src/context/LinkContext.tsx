import { useRef, ReactNode, createContext } from "react";

// interface LinkContextType {
//     servicesSection: ReactNode,
//     worksSection: ReactNode,
//     opinionsSection: ReactNode,
// }

interface LinkProviderProps {
    children: ReactNode; 
}

export const LinkContext = createContext<any>(null)

export const LinkProvider = ({children} : LinkProviderProps) => {
    const servicesSection = useRef<any>()
    const worksSection = useRef<any>()
    const opinionsSection = useRef<any>()

    return (
    <LinkContext.Provider value={{ servicesSection , worksSection, opinionsSection}}>
        {children} 
    </LinkContext.Provider>
    )
}
