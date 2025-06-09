"use client"

import { sendMail } from "@/services/email"
import { Input } from "./ui/input"
import { Textarea } from "./ui/text-area"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { schema } from "@/services/email/types"
import { Schema } from "@/services/email/types"
import { FaGithub, FaDiscord } from "react-icons/fa"
import { CiLinkedin } from "react-icons/ci"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"

export function ContactMe() {

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
      } = useForm<Schema>({
        resolver: zodResolver(schema),
      })


      const submitMutation = useMutation({
        mutationFn: sendMail,
        onSuccess: () => setValue('message', ''),
        onError: (error) => console.log(error),
      })
      
      const handleSubmitForm = (data: Schema) => {
        submitMutation.mutate(data)
      }

    return (
      <div className="flex flex-col space-x-2 w-[50vw]">
        <div className="space-y-4 p-4 text-center">
          <h1 className="text-4xl font-bold">Contact me!</h1>
          <div className="flex flex-row space-x-4 items-center justify-center">
            <a href="https://github.com/David-R-Lima">
              <FaGithub className="size-8" />
            </a>
            <a href="https://www.linkedin.com/in/david-lima-88a05533a/"><CiLinkedin className="size-8"/></a>
            <HoverCard openDelay={0}>
              <HoverCardTrigger >            
                <FaDiscord className="size-8"/>
              </HoverCardTrigger>
              <HoverCardContent side="right"className="flex items-center space-x-2 bg-black border-2 border-primary">
                <img src="/ramBall.jpg" alt="" className="size-12 rounded-full overflow-hidden" />
                <p className="text-white">ishol_aris</p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        <div className="p-2">
          <h1 className="text-center italic">Or send me a message!</h1>
        </div>
        <form onSubmit={handleSubmit(handleSubmitForm)} style={{ userSelect: "none"}} className="p-4 rounded-lg">
            <div className="flex flex-col items-center space-y-2" style={{ userSelect: "none"}}>
              <Textarea className="bg-black h-auto min-h-[100px] min-w-[90vw] md:min-w-[70vw]" placeholder="Message" style={{ userSelect: "none"}} {...register('message')} />
              {errors.message && (
                  <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>
            <div className="text-center mt-4 rounded-lg hover:text-primary hover:cursor-pointer">
              <button type="submit" style={{ userSelect: "none"}} onClick={(e) => {
                e.preventDefault();
                alert("WIP!")
              }}>Send</button>
            </div>
        </form>
      </div>
    )
}