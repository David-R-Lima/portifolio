import * as React from "react"

export function Projects() {
  return (
    <div className="flex flex-col space-y-20">
      <div className="p-4 max-w-[90vw] rounded-lg space-y-2 border-b-2 border-r-2 border-primary">
        <h1 className="italic text-primary">A Youtube fetching api</h1>
        <div>
          Created using nest js, this api utilizes yt-dlp to download videos from youtube and extract its audio and metadata, you can also create playlists, like songs, and stream the donwloaded files. You can also control the active client playback via http requests to pause, play, or skip tracks.
        </div>
        <div>
          Techologies used: NestJS, Prisma, PostgreSQL, Docker, yt-dlp
        </div>
        <div className="text-sm italic text-primary">
          Obs: This api is not intended for commercial use, as it would violate copyright laws, it is intended for personal use only.
        </div>
        <div className="text-sm italic text-primary">
          Obs2: Although intended to download music videos and songs then extract audio, it can be altered to download videos and serve as a library of multitude of content.
        </div>
        <div className="flex items-center space-x-2">
          <p>Repo: </p> <a className="underline hover:text-primary" href="https://github.com/David-R-Lima/yt">https://github.com/David-R-Lima/yt</a>
        </div>
      </div>
      <div className="flex flex-col p-4 max-w-[90vw] rounded-lg space-y-2 border-b-2 border-l-2 border-primary">
        <h1 className="italic text-primary">A Backup api</h1>
        <div>
          Created using nest js, this api allows you to backup your databases and save it to a local directory, you can schedule backups, limit the amount of backups to keep, download your compacted files anywhere, and configure notifications via smtp.
        </div>
        <div>
          Techologies used: NestJS, Prisma, PostgreSQL, Docker, Redis
        </div>
        <div className="italic text-sm text-primary">
          Databases suported: PostgreSQL, MySQL, MongoDB
        </div>
        <div className="flex items-center space-x-2">
          <p>Repo: </p> <a className="underline hover:text-primary" href="https://github.com/David-R-Lima/bkp">https://github.com/David-R-Lima/bkp</a>
        </div>
      </div>
    </div>
  )
}
