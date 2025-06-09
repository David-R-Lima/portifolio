"use client"

import { ListeningTo } from "@/services/listening-to"
import { useQuery } from "@tanstack/react-query"


export function NowListening() {
    const { data } = useQuery({
        queryKey: ['now-listening'],
        queryFn: ListeningTo,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        refetchInterval: 10000, // Refetch every 10 seconds
    })

    if(data) {
        return (
            <div className="bg-primary/10 p-2 mr-6 mb-2 rounded-md">
                <h1 className="text-lg font-bold mb-2">Now Listening</h1>
                <div className="flex items-center space-x-2 text-white">
                    <div>
                        {data.song.img_url ? (
                            <img src={data.song.img_url} alt={data.song.title} className="w-16 h-16 rounded-md" />
                        ) : (
                            <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
                                <span className="text-gray-500">No Image</span>
                            </div>
                        )}
                    </div>
                    <div className="min-w-[250px] max-w-[280px] overflow-hidden whitespace-nowrap">
                        <a href={data.song.youtube_url} target="_blank" rel="noopener noreferrer" className={`inline-block hover:underline hover:text-primary ${data.song.title.length > 25 ? "animate-scroll" : ""}`}>{data.song.title}</a>
                        {data.song.title.length > 25 && (
                            <a href={data.song.youtube_url} target="_blank" rel="noopener noreferrer" className={`inline-block px-4 hover:underline hover:text-primary ${data.song.title.length > 25 ? "animate-scroll" : ""}`}>{data.song.title}</a>
                        )} 
                        <h1>{data.song.artist}</h1>
                    </div>
                </div>
            </div>
        )
    }
}