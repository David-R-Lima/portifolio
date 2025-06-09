import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa"
import { SiApachekafka, SiExpress, SiFastify, SiMongodb, SiNestjs, SiTypescript } from "react-icons/si"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGolang } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMysql, DiRedis } from "react-icons/di";
import { TbApi } from "react-icons/tb";

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
    return (
        <div className="flex flex-col items-center max-w-[90vw] space-y-10 mb-20 mt-20">
            <div className=" max-w-[100%] bg-primary/20 p-4 rounded-md border-2-primary mt-20">
                <p className="text-xl">
                Hi! 👋 I&apos;m a passionate software developer with experience building web applications using technologies like React, Next.js, NestJS, and Node.js. I&apos;m proficient in TypeScript and JavaScript, and I&apos;ve recently started exploring Go. I work comfortably with databases such as PostgreSQL, MongoDB, and Redis, and I also have experience with Docker, Kafka, and server configuration.
                </p>
            </div>
            <div className="self-start mb-20 space-y-4 max-w-[90vw] ">
                <h1 className="w-[90vw] bg-primary/20 p-4 rounded-lg text-lg font-bold">Technologies </h1>
                <div className="space-y-2">
                    <h1 className="font-bold text-primary">Front end</h1>
                    <div className="flex flex-wrap gap-4">
                        {frontTechnologies.map((text, index) => (
                            <div key={index} className="flex items-center p-2 bg-primary/70 rounded-lg hover:cursor-pointer hover:bg-black transition-colors">
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
                            <div key={index} className="flex items-center p-2 bg-primary/70 rounded-lg hover:cursor-pointer hover:bg-black transition-colors">
                                <span className="text-2xl mr-2">{text.icon}</span>
                                <span className="text-lg">{text.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="space-y-2">
                    <h1 className="font-bold text-primary">Others</h1>
                    <div className="flex flex-wrap gap-4">
                        {otherTechnologies.map((text, index) => (
                            <div key={index} className="flex items-center p-2 bg-primary/70 rounded-lg hover:cursor-pointer hover:bg-black transition-colors">
                                <span className="text-2xl mr-2">{text.icon}</span>
                                <span className="text-lg">{text.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="space-y-4 self-start">
                <h1 className="w-[90vw] bg-primary/20 p-4 rounded-lg text-lg font-bold">Work experience</h1>
                <div className="p-4 bg-zinc-900 rounded-md">
                    <h2>Developer at <a href="https://bttis.com" className="text-blue-500">Bttis</a></h2>
                    <p>Set 2023 - Jun 2025</p>
                    <ul className="list-disc pl-5">
                        <li>Developed and maintained web applications using React and Node.js.</li>
                        <li>Collaborated with collegues to deliver high-quality software solutions.</li>
                        <li>Implemented RESTful APIs and integrated third-party services.</li>
                    </ul>
                    <div className="mt-3 text-sm text-gray-300">
                        <strong>Notes:</strong> Gained experience with NestJS for API development, integrated microservices using Kafka and Redis, and handled payment processing with external APIs. Built nice UIs with Next.js and managed deployments using Docker and reverse proxy configurations.
                    </div>                
                </div>
            </div>
            <div className="space-y-4 self-start">
                <h1 className="w-[90vw] bg-primary/20 p-4 rounded-lg text-lg font-bold">Education</h1>

                <div className="p-4 bg-zinc-900 rounded-md">
                    <h2 className="text-lg font-medium">
                    BSc in Information Systems at{' '}
                    <a href="https://univale.br/conheca-a-univale/" className="text-blue-500 underline">
                        UNIVALE
                    </a>
                    </h2>
                    <p className="text-sm text-gray-400">Oct 2021 – Present</p>
                </div>

                <div className="p-4 bg-zinc-900 rounded-md">
                    <h2 className="text-lg font-medium">
                    Technical Degree in Systems Development at{' '}
                    <a href="https://www.fiemg.com.br/senai/" className="text-blue-500 underline">
                        SENAI
                    </a>
                    </h2>
                    <p className="text-sm text-gray-400">Oct 2021 – Jun 2023</p>
                </div>
            </div>
        </div>
    )
}