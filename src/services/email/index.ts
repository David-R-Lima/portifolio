import { Schema } from "./types";

export async function sendMail({
  email,
  message,
  name
}: Schema) {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL ?? "", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: message,
    })
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}