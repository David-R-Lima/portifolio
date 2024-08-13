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
      body: JSON.stringify({
        content: `De: ${email} / Nome: ${name}. Mensagem: ${message}`,
      }),
    })
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}