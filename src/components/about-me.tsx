export function AboutMe() {
    return (
        <div className="flex flex-col items-center max-w-[90vw] space-y-10 mb-20 mt-20">
            <div className=" max-w-[100%] md:max-w-[70%] bg-primary/20 p-4 rounded-md border-2-primary mt-20 mb-20">
                <p>
                Hi! 👋 I&apos;m a passionate software developer with experience building web applications using technologies like React, Next.js, NestJS, and Node.js. I&apos;m proficient in TypeScript and JavaScript, and I&apos;ve recently started exploring Go. I work comfortably with databases such as PostgreSQL, MongoDB, and Redis, and I also have experience with Docker, Kafka, and server configuration.
                </p>

            </div>
            <div className="space-y-2 self-start">
                <h1 className="text-xl font-semibold">Work experience</h1>
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
                <h1 className="text-xl font-semibold">Education</h1>

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