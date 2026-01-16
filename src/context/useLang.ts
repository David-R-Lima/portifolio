import { any } from 'zod'
import { create } from 'zustand'

interface LangState {
  lang: 'PTBR' | 'ENG'
  setLang: (lang: 'PTBR' | 'ENG') => void
  text: {
    ENG: {
      header: {
        home: string
        about: string
        projects: string
        contact: string
      }
      mainTitle: {
        [key: string]: string
      }
      aboutMe: {
        [key: string]: string
      }
      projects: {
        [key: string]: string
      }
      contactMe: {
        [key: string]: string
      }
    }
    PTBR: {
      header: {
        home: string
        about: string
        projects: string
        contact: string
      }
      mainTitle: {
        [key: string]: string
      }
      aboutMe: {
        [key: string]: string
      }
      projects: {
        [key: string]: string
      }
      contactMe: {
        [key: string]: string
      }
    }
  }
}

export const useLang = create<LangState>((set) => ({
  // @ts-expect-error
  lang: undefined,
  setLang: (lang: 'PTBR' | 'ENG') => {
    set({ lang })
    localStorage.setItem('lang', lang)
  },
  text: {
    ENG: {
      header: {
        home: 'Home',
        about: 'About Me',
        projects: 'Projects',
        contact: 'Contact',
      },
      mainTitle: {
        '1': 'Hello! My name is ',
        '2': 'DAVID',
        '3': ', and I am a fullstack developer.',
        '4': 'Thanks for checking out my portifolio!',
        '5': 'Click here to download my ',
        '6': 'Resume',
        '7': 'or',
        '8': 'scroll',
        '9': 'down to see more about myself.',
      },
      aboutMe: {
        '1': "Hi! I'm a passionate software developer with experience building web applications using technologies like React, Next.js, NestJS, and Node.js. I'm proficient in TypeScript and JavaScript, and I've recently started exploring Go. I work comfortably with databases such as PostgreSQL, MongoDB, and Redis, and I also have experience with Docker, Kafka, and server configuration.",
        '2': 'Technologies',
        '3': 'Others',
        '4': 'Work experience',
        '5': 'Developer at',
        '6': 'Bttis',
        '7': 'Set 2023 - Jun 2025',
        '8': 'Developed and maintained web applications using React and Node.js.',
        '9': 'Collaborated with collegues to deliver high-quality software solutions',
        '10': 'Implemented RESTful APIs and integrated third-party services.',
        '11': 'Notes:',
        '12': 'Gained experience with NestJS for API development, integrated microservices using Kafka and Redis, and handled payment processing with external APIs. Built nice UIs with Next.js and managed deployments using Docker and reverse proxy configurations.',
        '13': 'Education',
        '14': "Bachelor's degree in Information Systems at",
        '15': 'Univale',
        '16': 'Oct 2021 – Present',
        '17': 'Technical Degree in Systems Development at',
        '18': 'SENAI',
        '19': 'Oct 2021 – Jun 2023',
      },
      projects: {
        '1': 'Projects',
        '2': 'A Youtube fetching api',
        '3': 'Built with NestJS, this API uses',
        '4': 'yt-dlp',
        '5': 'to download YouTube videos and extract their audio and metadata. It also supports playlist creation, liking songs, and streaming downloaded files. Additionally, you can control active client playback via HTTP requests to pause, play, or skip tracks.',
        '6': 'Techologies used: NestJS, Prisma, PostgreSQL, Docker, yt-dlp',
        '7': 'Note: This API is intended for personal use only. Commercial use may violate copyright laws. (depends on what you download, otherwise just breaches Youtube TOS)',
        '8': 'Note 2: Although primarily built to download music videos and extract audio, it can be adapted to download and serve a broader range of video content.',
        '9': 'Github repository:',
        '10': 'A Client for the Youtube fetching api',
        '11': 'Built with React + vite, this client integrates with the previously mentioned API to provide a user-friendly interface for downloading and streaming content. It allows users to search for videos, create playlists, and manage their downloaded content. It also has a built-in music player for streaming audio.',
        '12': 'Techologies used: React + vite, tauri, tailwindcss, zustand',
        '13': 'Note: It uses the same API as the previous project, so it is also intended for personal use only.',
        '14': 'Note 2: It uses Tauri to create a desktop application, allowing you to run it on Windows, Linux, and macOS. It can also be served as a normal web app, and it also uses PWA for mobile clients.',
        '15': 'Github repository:',
        '16': 'A Backup api',
        '17': 'Created using nest js, this api allows you to backup your databases and save it to a local directory, you can schedule backups, limit the amount of backups to keep, download your compacted files anywhere, and configure notifications via smtp.',
        '18': 'Techologies used: NestJS, Prisma, PostgreSQL, Docker, Redis',
        '19': 'Databases suported: PostgreSQL, MySQL, MongoDB',
        '20': 'Github repository:',
      },
      contactMe: {
        '1': 'Contact me!',
      },
    },
    PTBR: {
      header: {
        home: 'Home',
        about: 'Sobre mim',
        projects: 'Projetos',
        contact: 'Contato',
      },
      mainTitle: {
        '1': 'Olá! Meu nome é ',
        '2': 'DAVID',
        '3': ', e sou desenvolvedor fullstack.',
        '4': 'Obrigado por visitar meu portfólio!',
        '5': 'Clique aqui para baixar meu ',
        '6': 'Currículo',
        '7': 'ou',
        '8': 'role para baixo',
        '9': 'para ver mais sobre mim.',
      },
      aboutMe: {
        '1': 'Olá! Sou um desenvolvedor de software apaixonado, com experiência na construção de aplicações web utilizando tecnologias como React, Next.js, NestJS e Node.js. Tenho domínio de TypeScript e JavaScript e recentemente comecei a explorar Go. Trabalho com tranquilidade com bancos de dados como PostgreSQL, MongoDB e Redis, além de possuir experiência com Docker, Kafka e configuração de servidores.',
        '2': 'Tecnologias',
        '3': 'Outros',
        '4': 'Experiência Profissional',
        '5': 'Desenvolvedor na',
        '6': 'Bttis',
        '7': 'Set 2023 - Jun 2025',
        '8': 'Desenvolvi e mantive aplicações web usando React e Node.js.',
        '9': 'Colaborei com colegas para entregar soluções de software de alta qualidade',
        '10': 'Implementei APIs RESTful e integrei serviços de terceiros.',
        '11': 'Notas:',
        '12': 'Ganhei experiência com NestJS para desenvolvimento de APIs, integrei microserviços usando Kafka e Redis, e lidei com processamento de pagamentos com APIs externas. Criei interfaces bonitas com Next.js e gerenciei implantações usando Docker e configurações de proxy reverso.',
        '13': 'Educação',
        '14': 'Bachalerado em Sistemas de Informação na',
        '15': 'Univale',
        '16': 'Oct 2021 – Presente',
        '17': 'Técnico em Desenvolvimento de Sistemas no',
        '18': 'SENAI',
        '19': 'Oct 2021 – Jun 2023',
      },
      projects: {
        '1': 'Projetos',
        '2': 'Uma api para buscar vídeos do Youtube',
        '3': 'Construída com NestJS, esta API utiliza',
        '4': 'yt-dlp',
        '5': 'Para baixar vídeos do YouTube e extrair seu áudio e metadados. Ele também oferece suporte à criação de playlists, curtidas em músicas e streaming dos arquivos baixados. Além disso, é possível controlar a reprodução ativa dos clientes por meio de requisições HTTP para pausar, reproduzir ou pular faixas.',
        '6': 'Tecnologias usadas: NestJS, Prisma, PostgreSQL, Docker, yt-dlp',
        '7': 'Observação: Esta API é destinada apenas para uso pessoal. O uso comercial pode violar leis de direitos autorais (dependendo do conteúdo baixado); caso contrário, pode apenas infringir os Termos de Serviço do YouTube.',
        '8': 'Observação 2: Embora tenha sido desenvolvido principalmente para baixar videoclipes musicais e extrair áudio, ele pode ser adaptado para baixar e servir uma gama mais ampla de conteúdos em vídeo.',
        '9': 'Repositório github:',
        '10': 'Uma cliente para a api de busca do Youtube',
        '11': 'Desenvolvido com React + Vite, este cliente integra-se à API mencionada anteriormente para fornecer uma interface amigável para download e streaming de conteúdo. Ele permite que os usuários pesquisem vídeos, criem playlists e gerenciem o conteúdo baixado. Também conta com um player de música integrado para streaming de áudio.',
        '12': 'Tecnologias usadas: React + vite, tauri, tailwindcss, zustand',
        '13': 'Observação: Ele usa a mesma API do projeto anterior, então também é destinado apenas para uso pessoal.',
        '14': 'Observação 2: Ele usa Tauri para criar um aplicativo desktop, permitindo que você o execute no Windows, Linux e macOS. Ele também pode ser servido como um aplicativo web normal e utiliza PWA para clientes móveis.',
        '15': 'Repositório github:',
        '16': 'Uma api de backup',
        '17': 'Criada usando nest js, esta api permite que você faça backup de seus bancos de dados e salve em um diretório local, você pode agendar backups, limitar a quantidade de backups a manter, baixar seus arquivos compactados em qualquer lugar e configurar notificações via smtp.',
        '18': 'Tecnologias usadas: NestJS, Prisma, PostgreSQL, Docker, Redis',
        '19': 'Bancos de dados suportados: PostgreSQL, MySQL, MongoDB',
        '20': 'Repositório github:',
      },
      contactMe: {
        '1': 'Entre em contato comigo!',
      },
    },
  },
}))
