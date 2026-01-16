'use client'

import { useLang } from "@/context/useLang"
import { useEffect } from "react"

export function LangProvider({children}: {
    children: React.ReactNode,  // The component children to render
}){

    const { lang, setLang } = useLang()

    const getLang = () => {
        const lang = localStorage.getItem('lang')

        return lang
    }

    useEffect(() => {
        const lang = getLang()

        if(lang === 'PTBR' || lang === 'ENG'){
            setLang(lang)
        } else {
            setLang('PTBR')
            localStorage.setItem('lang', 'PTBR')
        }
    }, [])

    if(lang === undefined) {
        return <div></div>
    }

    return (
        <div>
            {children}
        </div>
    )
}