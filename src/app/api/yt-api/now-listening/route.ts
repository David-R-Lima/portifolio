export async function GET() {
  const url = process.env.YT_API_URL

  if (!url) {
    return new Response('YT_API_URL not set', { status: 500 })
  }

  const res = await fetch(`${url}/now-listening`, {
    method: 'GET',
    cache: 'no-store',
  })

  if (!res.ok) {
    return new Response('Failed to fetch now-listening', { status: res.status })
  }

  const data = await res.json()

  return Response.json(data)
}
