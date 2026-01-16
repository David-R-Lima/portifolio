'use client'

import { useLang } from "@/context/useLang"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

export function LangConfig() {

    const { lang, setLang } = useLang()

    return (
        <Select onValueChange={(e) => {
            setLang(e as 'PTBR' | 'ENG')
        }}
        defaultValue={lang}>
            <SelectTrigger className="w-[120px] bg-primary">
                <SelectValue placeholder="Lang" />
            </SelectTrigger>
            <SelectContent className="bg-primary">
                <SelectItem className="hover:cursor-pointer focus:text-secondary" value="PTBR">Português</SelectItem>
                <SelectItem className="hover:cursor-pointer focus:text-secondary" value="ENG">English</SelectItem>
            </SelectContent>
        </Select>
    )
}