"use client"

import { AboutMe } from "@/components/about-me";
import { IsInView } from "@/components/is-in-view";
import { SendMail } from "@/components/send-mail";
import { TrailEffect } from "@/components/trail";
import { ChevronsDown, ChevronsUp } from "lucide-react";
import { useState } from "react";

const sections = ["home", "aboutme", "projects", "contactme"]

export default function Home() {
  const [current, setCurrent] = useState(0)

  return (
    <main>
      <div className={`fixed flex flex-col items-center left-2 border-2 top-28 p-1 ${current === 0 ? "opacity-0" : "opacity-100"} transition-opacity`}>
        <a href={`#${sections[current === 0 ? 0 : current - 1]}`}><ChevronsUp></ChevronsUp></a>
        <div className="h-[500px] p-2">
          <div className={`bg-primary w-[1rem] h-[4rem] rounded-sm transition-all z-20`} style={{ marginTop: `${current * 140}px`, userSelect: "all" }}>
          </div>
        </div>
        <a href={`#${sections[current === 3 ? 3 : current + 1]}`}><ChevronsDown></ChevronsDown></a>
      </div>

      <div className="fixed flex justify-end items-center w-[100vw] h-[10vh] space-x-4 p-6">
        <h1><a href="#home" className={`z-50 hover:cursor-pointer ${current === 0 ? "text-primary border-b-2 border-primary" : ""}`}>Home</a></h1>
        <h1><a href="#aboutme" className={`z-50 hover:cursor-pointer ${current === 1 ? "text-primary border-b-2 border-primary" : ""}`}>About me</a></h1>
        <h1><a href="#projects" className={`z-50 hover:cursor-pointer ${current === 2 ? "text-primary border-b-2 border-primary" : ""}`}>Projects</a></h1>
        <h1><a href="#contactme" className={`z-50 hover:cursor-pointer ${current === 3 ? "text-primary border-b-2 border-primary" : ""}`}>Contact me</a></h1>
      </div>

      <TrailEffect current={current}>
        <IsInView setCurrent={setCurrent} id={0}>
          <div id={sections[0]} className="flex items-center justify-center w-[100vw] h-[100vh] z-20">
            <h1 className="text-2xl z-20" style={{ userSelect: "none"}}>Hello! My name is <span className="text-primary text-4xl">DAVID</span>, and I am a fullstack developer</h1>
          </div>
        </IsInView>
        <IsInView setCurrent={setCurrent} id={1}>
          <div id={sections[1]} className="flex items-center justify-center w-[100vw] h-[100vh]">
            <div>
              <AboutMe />
            </div>
          </div>
        </IsInView>

        <IsInView setCurrent={setCurrent} id={2}>
          <div id={sections[2]} className="flex items-center justify-center w-[100vw] h-[100vh]">
            <div>
              <SendMail />
            </div>
          </div>
        </IsInView>

        <IsInView setCurrent={setCurrent} id={3}>
          <div id={sections[3]} className="flex items-center justify-center w-[100vw] h-[100vh]">
            <div>
              <SendMail />
            </div>
          </div>
        </IsInView>
      </TrailEffect>
    </main>
  );
}
