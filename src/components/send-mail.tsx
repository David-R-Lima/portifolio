"use client"

import { Input } from "./ui/input"
import { Textarea } from "./ui/text-area"

export function SendMail() {
    return (
        <form>
            <div className="flex flex-col space-y-2 w-[30rem]">
                <Input type="text" name="name" placeholder="Name"  className="" style={{ userSelect: "none"}}/>
                <Input type="email" name="email" placeholder="Email" style={{ userSelect: "none"}} />
                <Textarea name="message" placeholder="Message" style={{ userSelect: "none"}} />
                <button type="submit" style={{ userSelect: "none"}}>Send</button>
            </div>
        </form>
    )
}