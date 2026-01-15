import * as React from "react"

export function Projects() {
  return (
    <div className="flex flex-col space-y-20 mt-20">
      <div className="p-4 max-w-[90vw] space-y-2 rounded-lg bg-primary text-secondary">
        <h1 className="font-bold italic text-secondary text-xl">A Youtube fetching api</h1>
        <div className="text-secondary-foreground">
          Built with NestJS, this API uses <code>yt-dlp</code> to download YouTube videos and extract their audio and metadata. It also supports playlist creation, liking songs, and streaming downloaded files. Additionally, you can control active client playback via HTTP requests to pause, play, or skip tracks.
        </div>
        <div className="text-secondary-foreground">
          Techologies used: NestJS, Prisma, PostgreSQL, Docker, yt-dlp
        </div>
        <div className="font-bold text-sm italic text-secondary">
          Note: This API is intended for personal use only. Commercial use may violate copyright laws. (depends on what you download, otherwise just breaches Youtube TOS)
        </div>
        <div className="font-bold text-sm italic text-secondary">
          Note 2: Although primarily built to download music videos and extract audio, it can be adapted to download and serve a broader range of video content.
        </div>
        <div className="flex items-center space-x-2 text-secondary-foreground">
          <p>Github repository: </p> <a className="underline hover:text-secondary" href="https://github.com/David-R-Lima/yt">https://github.com/David-R-Lima/yt</a>
        </div>
      </div>
      <div className="p-4 max-w-[90vw] space-y-2 rounded-lg bg-primary text-secondary">
        <h1 className="font-bold italic text-secondary text-xl">A Client for the Youtube fetching api</h1>
        <div className="text-secondary-foreground">
          Built with React + vite, this client integrates with the previously mentioned API to provide a user-friendly interface for downloading and streaming content. It allows users to search for videos, create playlists, and manage their downloaded content. It also has a built-in music player for streaming audio.
        </div>
        <div className="text-secondary-foreground">
          Techologies used: React + vite, tauri, tailwindcss, zustand
        </div>
        <div className="font-bold text-sm italic text-secondary">
          Note: It uses the same API as the previous project, so it is also intended for personal use only.
        </div>
        <div className="font-bold text-sm italic text-secondary">
          Note 2: It uses Tauri to create a desktop application, allowing you to run it on Windows, Linux, and macOS. It can also be served as a normal web app, and it also uses PWA for mobile clients.
        </div>
        <div className="flex items-center space-x-2 text-secondary-foreground">
          <p>Github repository: </p> <a className="underline hover:text-secondary" href="https://github.com/David-R-Lima/tauri-ui">https://github.com/David-R-Lima/tauri-ui</a>
        </div>
      </div>
      <div className="p-4 max-w-[90vw] space-y-2 rounded-lg bg-primary text-secondary">
        <h1 className="font-bold italic text-secondary text-xl">A Backup api</h1>
        <div className="text-secondary-foreground">
          Created using nest js, this api allows you to backup your databases and save it to a local directory, you can schedule backups, limit the amount of backups to keep, download your compacted files anywhere, and configure notifications via smtp.
        </div>
        <div className="text-secondary-foreground">
          Techologies used: NestJS, Prisma, PostgreSQL, Docker, Redis
        </div>
        <div className="font-bold italic text-sm text-secondary">
          Databases suported: PostgreSQL, MySQL, MongoDB
        </div>
        <div className="flex items-center space-x-2 text-secondary-foreground">
          <p>Github repository: </p> <a className="underline hover:text-secondary" href="https://github.com/David-R-Lima/bkp">https://github.com/David-R-Lima/bkp</a>
        </div>
      </div>
    </div>
  )
}
