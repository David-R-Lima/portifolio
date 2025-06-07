const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

type NowListeningResponse = {
  song: {
    title: string
    artist: string
    duration: number
    youtube_url: string
    img_url: string
  }
  current_time: number
  updated_at: Date
}

export function ListeningTo() {
  const data = fetch(baseUrl + '/api/yt-api/now-listening', {
    method: 'GET',
    cache: 'no-store',
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json() as Promise<NowListeningResponse>
  })

  return data
}
