"use client"

import { sendMail } from "@/services/email"
import { Input } from "./ui/input"
import { Textarea } from "./ui/text-area"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { schema } from "@/services/email/types"
import { Schema } from "@/services/email/types"

export function SendMail() {

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
        <form onSubmit={handleSubmit(handleSubmitForm)} style={{ userSelect: "none"}}>
            <div className="flex flex-col space-y-2 w-[30rem]" style={{ userSelect: "none"}}>
                <Input type="text" placeholder="Name" style={{ userSelect: "none"}} {...register('name')}/>
                {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                )}
                <Input type="email" placeholder="Email" style={{ userSelect: "none"}} {...register('email')} />
                {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                )}
                <Textarea placeholder="Message" style={{ userSelect: "none"}} {...register('message')} />
                {errors.message && (
                    <p className="text-red-500">{errors.message.message}</p>
                )}
                <button type="submit" style={{ userSelect: "none"}}>Send</button>
            </div>
        </form>
    )
}