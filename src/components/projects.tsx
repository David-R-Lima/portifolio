import { useLang } from "@/context/useLang"
import * as React from "react"

export function Projects() {
  const { lang, text } = useLang()
  return (
    <div className="flex flex-col space-y-20 mt-20">
      <div className="p-4 max-w-[90vw] space-y-2 rounded-lg bg-primary text-secondary">
        <h1 className="font-bold italic text-secondary text-xl">{text[lang].projects['2']}</h1>
        <div className="text-secondary-foreground">
          {text[lang].projects['3']} <code>{text[lang].projects['4']}</code> {text[lang].projects['5']}
        </div>
        <div className="text-secondary-foreground">
          {text[lang].projects['6']}
        </div>
        <div className="font-bold text-sm italic text-secondary">
          {text[lang].projects['7']}
        </div>
        <div className="font-bold text-sm italic text-secondary">
          {text[lang].projects['8']}
        </div>
        <div className="flex items-center space-x-2 text-secondary-foreground">
          <p>{text[lang].projects['9']} </p> <a className="underline hover:text-secondary" href="https://github.com/David-R-Lima/yt">https://github.com/David-R-Lima/yt</a>
        </div>
      </div>
      <div className="p-4 max-w-[90vw] space-y-2 rounded-lg bg-primary text-secondary">
        <h1 className="font-bold italic text-secondary text-xl">{text[lang].projects['10']}</h1>
        <div className="text-secondary-foreground">
          {text[lang].projects['11']}
        </div>
        <div className="text-secondary-foreground">
          {text[lang].projects['12']}
        </div>
        <div className="font-bold text-sm italic text-secondary">
          {text[lang].projects['13']}
        </div>
        <div className="font-bold text-sm italic text-secondary">
          {text[lang].projects['14']}
        </div>
        <div className="flex items-center space-x-2 text-secondary-foreground">
          <p>{text[lang].projects['15']} </p> <a className="underline hover:text-secondary" href="https://github.com/David-R-Lima/tauri-ui">https://github.com/David-R-Lima/tauri-ui</a>
        </div>
      </div>
      <div className="p-4 max-w-[90vw] space-y-2 rounded-lg bg-primary text-secondary">
        <h1 className="font-bold italic text-secondary text-xl">{text[lang].projects['16']}</h1>
        <div className="text-secondary-foreground">
          {text[lang].projects['17']}
        </div>
        <div className="text-secondary-foreground">
          {text[lang].projects['18']}
        </div>
        <div className="font-bold italic text-sm text-secondary">
          {text[lang].projects['19']}
        </div>
        <div className="flex items-center space-x-2 text-secondary-foreground">
          <p>{text[lang].projects['20']} </p> <a className="underline hover:text-secondary" href="https://github.com/David-R-Lima/bkp">https://github.com/David-R-Lima/bkp</a>
        </div>
      </div>
    </div>
  )
}
