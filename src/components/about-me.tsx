import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa"
import { SiApachekafka, SiExpress, SiFastify, SiMongodb, SiNestjs, SiTypescript } from "react-icons/si"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGolang } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMysql, DiRedis } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { useLang } from "@/context/useLang";

const frontTechnologies = [
    {
        title: 'React',
        icon: <FaReact />
    },
    {
        title: 'Next.js',
        icon: <RiNextjsFill />
    },
    {
        title: 'TypeScript',
        icon: <SiTypescript />

    },
    {
        title: 'JavaScript',
        icon: <IoLogoJavascript />
    },
    {
        title: 'HTML',
        icon: <FaHtml5 />
    },
    {
        title: 'CSS',
        icon: <FaCss3/>
    },
    {
        title: 'Tailwind CSS',
        icon: <RiTailwindCssFill />
    }
]

const backTechnologies = [
    {
        title: 'Node.js',
        icon: <FaNodeJs />
    },
    {
        title: 'NestJS',
        icon: <SiNestjs />
    },
    {
        title: 'Express',
        icon: <SiExpress />
    },
    {
        title: 'Fastify',
        icon: <SiFastify />
    },
    {
        title: 'TypeScript',
        icon: <SiTypescript />
    },
    {
        title: 'JavaScript',
        icon: <IoLogoJavascript />
    },
    {
        title: 'Go',
        icon: <FaGolang />
    }
]

const otherTechnologies = [
    {
        title: 'PostgreSQL',
        icon: <BiLogoPostgresql />
    },
    {
        title: "MySQL",
        icon: <DiMysql />
    },
    {
        title: 'MongoDB',
        icon: <SiMongodb />
    },
    {
        title: 'Redis',
        icon: <DiRedis />
    },
    {
        title: 'Docker',
        icon: <FaDocker />
    },
    {
        title: 'Kafka',
        icon: <SiApachekafka />
    },
    {
        title: 'RESTful APIs',
        icon: <TbApi />
    },
    {
        title: 'Git',
        icon: <FaGitAlt />
    }
]

export function AboutMe() {

    const {text, lang} = useLang()
    return (
        <div className="flex flex-col items-center max-w-[90vw] space-y-10 mb-20 mt-20">
            <div className=" max-w-[100%] bg-primary p-4 rounded-md border-2-primary mt-20">
                <p className="text-xl text-secondary-foreground">{text[lang].aboutMe['1']}</p>
            </div>
            <div className="self-start mb-20 space-y-4 max-w-[90vw] ">
                <h1 className="text-secondary w-[90vw] bg-primary p-4 rounded-lg text-lg font-bold">{text[lang].aboutMe['2']}</h1>
                <div className="space-y-2">
                    <h1 className="font-bold text-primary">Front end</h1>
                    <div className="flex flex-wrap gap-4">
                        {frontTechnologies.map((text, index) => (
                            <div key={index} className="flex items-center p-2 bg-primary rounded-lg hover:cursor-pointer hover:bg-secondary transition-colors">
                                <span className="text-2xl mr-2">{text.icon}</span>
                                <span className="text-lg">{text.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="space-y-2">
                    <h1 className="font-bold text-primary">Back end</h1>
                    <div className="flex flex-wrap gap-4">
                        {backTechnologies.map((text, index) => (
                            <div key={index} className="flex items-center p-2 bg-primary rounded-lg hover:cursor-pointer hover:bg-secondary transition-colors">
                                <span className="text-2xl mr-2">{text.icon}</span>
                                <span className="text-lg">{text.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="space-y-2">
                    <h1 className="font-bold text-primary">{text[lang].aboutMe['3']}</h1>
                    <div className="flex flex-wrap gap-4">
                        {otherTechnologies.map((text, index) => (
                            <div key={index} className="flex items-center p-2 bg-primary rounded-lg hover:cursor-pointer hover:bg-secondary transition-colors">
                                <span className="text-2xl mr-2">{text.icon}</span>
                                <span className="text-lg">{text.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="space-y-4 self-start ">
                <h1 className="text-secondary w-[90vw] bg-primary p-4 rounded-lg text-lg font-bold">{text[lang].aboutMe['4']}</h1>
                <div className="p-4 bg-primary rounded-md text-secondary-foreground">
                    <h2>{text[lang].aboutMe['5']} <a href="https://bttis.com" className="text-blue-500"></a>{text[lang].aboutMe['6']}</h2>
                    <p>{text[lang].aboutMe['7']}</p>
                    <ul className="list-disc pl-5">
                        <li>{text[lang].aboutMe['8']}</li>
                        <li>{text[lang].aboutMe['9']}</li>
                        <li>{text[lang].aboutMe['10']}</li>
                    </ul>
                    <div className="mt-3 font-bold text-sm italic text-primary">
                        <strong>{text[lang].aboutMe['11']}</strong> {text[lang].aboutMe['12']}
                    </div>                
                </div>
            </div>
            <div className="space-y-4 self-start text-secondary">
                <h1 className="w-[90vw] bg-primary p-4 rounded-lg text-lg font-bold">{text[lang].aboutMe['13']}</h1>

                <div className="p-4 bg-primary rounded-md">
                    <h2 className="text-lg font-medium text-secondary-foreground">
                    {text[lang].aboutMe['14']} {" "}
                    <a href="https://univale.br/conheca-a-univale/" className="text-blue-500 underline">
                        {text[lang].aboutMe['15']}
                    </a>
                    </h2>
                    <p className="text-sm text-primary font-bold">{text[lang].aboutMe['16']}</p>
                </div>

                <div className="p-4 bg-primary rounded-md text-secondary-foreground">
                    <h2 className="text-lg font-medium">
                    {text[lang].aboutMe['17']} {" "}
                    <a href="https://www.fiemg.com.br/senai/" className="text-blue-500 underline">
                        {text[lang].aboutMe['18']}
                    </a>
                    </h2>
                    <p className="text-sm text-primary font-bold">{text[lang].aboutMe['19']}</p>
                </div>
            </div>
        </div>
    )
}