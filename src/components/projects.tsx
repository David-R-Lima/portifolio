import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[80vw]"
    >
      <CarouselContent className="w-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <div className="flex flex-col min-h-[200px] w-full">
                <div className="h-[80%] bg-zinc-900 rounded-t-lg">
                    <img src="https://genshinlab.com/wp-content/uploads/Anby-Build.webp" alt="" />
                </div>
                <div className="p-4 bg-zinc-900 rounded-b-lg hover:bg-primary hover:cursor-pointer transition-colors">
                    <h1>
                        Acesse aqui
                    </h1>
                </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant={'ghost'} />
      <CarouselNext variant={'ghost'} />
    </Carousel>
  )
}
