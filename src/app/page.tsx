"use client"

import { AboutMe } from "@/components/about-me";
import { IsInView } from "@/components/is-in-view";
import { NowListening } from "@/components/now-listening";
import { Projects } from "@/components/projects";
import { ContactMe } from "@/components/contact-me";
import { TrailEffect } from "@/components/trail";
// import { ChevronsDown, ChevronsUp } from "lucide-react";
import { useState } from "react";
import { ChevronUp, Trash } from "lucide-react";
import { TrailConfig } from "@/components/trail-config";
import { useTrail } from "@/context/useTrail";

const sections = ["home", "aboutme", "projects", "contactme"]

export default function Home() {
  const [current, setCurrent] = useState(0)
  const { clearPermanentTrail } = useTrail()

  return (
    <main>
      {/*       <svg style={{stroke: "rgb(255,255, 100)"}} id="seta" className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none overflow-visible text-primary"><path d="M 1107 27 L 1120 39 L 1131 54 L 1141 65 L 1151 77 L 1160 89 L 1167 99 L 1173 108 L 1181 118 L 1186 125 L 1191 132 L 1195 139 L 1199 143 L 1203 149 L 1204 154 L 1206 158 L 1207 163 L 1207 168 L 1208 172 L 1208 184 L 1208 190 L 1208 198 L 1207 207 L 1204 215 L 1201 224 L 1198 231 L 1192 240 L 1187 247 L 1180 254 L 1171 260 L 1164 264 L 1155 269 L 1147 273 L 1139 276 L 1133 278 L 1126 279 L 1120 280 L 1116 280 L 1111 281 L 1107 281 L 1104 281 L 1102 281 L 1100 281 L 1099 281 L 1099 280 L 1098 280 L 1099 280 L 1099 280 L 1100 280 L 1100 277 L 1101 274 L 1103 268 L 1105 260 L 1108 251 L 1111 242 L 1115 232 L 1118 223 L 1123 213 L 1127 204 L 1131 195 L 1134 189 L 1138 184 L 1139 180 L 1140 177 L 1142 176 L 1143 175 L 1142 178 L 1138 187 L 1132 198 L 1127 209 L 1119 221 L 1113 232 L 1106 245 L 1098 256 L 1091 267 L 1086 275 L 1079 283 L 1075 288 L 1073 291 L 1071 293 L 1071 294 L 1071 295 L 1074 295 L 1079 295 L 1086 295 L 1093 294 L 1099 293 L 1105 293 L 1113 293 L 1122 296 L 1131 296 L 1139 300 L 1147 303 L 1156 304 L 1166 309 L 1175 313 L 1184 316 L 1197 324 L 1203 328 L 1207 331 L 1212 332 L 1215 335 L 1217 336 L 1219 336 L 1219 337" fill="none"></path></svg> */}
      {/* <div className={`fixed flex flex-col items-center left-2 border-2 top-28 p-1 ${current === 0 ? "opacity-0" : "opacity-100"} transition-opacity`}>
        <a href={`#${sections[current === 0 ? 0 : current - 1]}`}><ChevronsUp></ChevronsUp></a>
        <div className="h-[500px] p-2">
          <div className={`bg-primary w-[1rem] h-[4rem] rounded-sm transition-all z-20`} style={{ marginTop: `${current * 140}px`, userSelect: "all" }}>
          </div>
        </div>
        <a href={`#${sections[current === 3 ? 3 : current + 1]}`}><ChevronsDown></ChevronsDown></a>
      </div> */}
      <div className={`${current > 0 ? "flex" : "hidden"} fixed bg-primary/20 justify-end items-center w-[100vw] h-[10vh] space-x-4 p-6`}>
        <h1><a href="#home" className={`z-50 hover:cursor-pointer ${current === 0 ? "text-primary border-b-2 border-primary" : ""}`}>Home</a></h1>
        <h1><a href="#aboutme" className={`z-50 hover:cursor-pointer ${current === 1 ? "text-primary border-b-2 border-primary" : ""}`}>About me</a></h1>
        <h1><a href="#projects" className={`z-50 hover:cursor-pointer ${current === 2 ? "text-primary border-b-2 border-primary" : ""}`}>Projects</a></h1>
        <h1><a href="#contactme" className={`z-50 hover:cursor-pointer ${current === 3 ? "text-primary border-b-2 border-primary" : ""}`}>Contact me</a></h1>
      </div>
      <div className="flex flex-col space-y-2 fixed bottom-2 left-2 bg-primary/20 rounded-lg z-20">
        <a href="#home" className="hover:cursor-pointer hover:bg-primary/40 rounded-lg p-2">
          <ChevronUp className="size-6" />
        </a>
        <div className="hover:cursor-pointer hover:bg-primary/40 rounded-lg p-2">
          <TrailConfig></TrailConfig>
        </div>
        <div className="hover:cursor-pointer hover:bg-primary/40 rounded-lg p-2">
          <Trash className="size-6" onClick={() => {
            clearPermanentTrail()
          }}></Trash>
        </div>
      </div>

      <TrailEffect current={current} className="flex flex-col items-center justify-center" >
        <IsInView setCurrent={setCurrent} id={0}>
          <div id={sections[0]} className="flex items-center justify-center w-[100vw] min-h-[100vh] z-20">
            <h1 className="text-2xl z-20 text-center" style={{ userSelect: "none"}}>Hello! My name is <span className="text-primary text-4xl">DAVID</span>, and I am a fullstack developer</h1>
          </div>
        </IsInView>
        <IsInView setCurrent={setCurrent} id={1}>
          <div id={sections[1]} className="flex items-center justify-center w-[100vw] min-h-[100vh]">
            <div>
              <AboutMe />
            </div>
          </div>
        </IsInView>

        <IsInView setCurrent={setCurrent} id={2}>
          <div id={sections[2]} className="flex flex-col items-center justify-center w-[90vw] min-h-[100vh] mt-10">
            <h1 className="text-4xl font-bold"> Projects</h1>
            <div>
              <Projects />
            </div>
          </div>
        </IsInView>

        <IsInView setCurrent={setCurrent} id={3}>
          <div id={sections[3]} className="flex items-center justify-center w-[100vw] min-h-[100vh]">
            <div>
              <ContactMe />
            </div>
          </div>
        </IsInView>
      </TrailEffect>

      <div className="sticky bottom-0 w-[100vw] flex items-end justify-end">
        <NowListening></NowListening>
      </div>
    </main>
  );
}
