"use client"

import { Input } from "./ui/input"
import { Textarea } from "./ui/text-area"

export function SendMail() {
    return (
        <form>
            <div className="flex flex-col space-y-2 w-[30rem]">
                <Input type="text" name="name" placeholder="Name"  className=""/>
                <Input type="email" name="email" placeholder="Email" />
                <Textarea name="message" placeholder="Message" />
                <button type="submit">Send</button>
            </div>
        </form>
    )
}