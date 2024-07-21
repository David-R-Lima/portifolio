'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useTrail } from "@/context/useTrail"
import { Wrench } from "lucide-react"
import { HexColorPicker } from "react-colorful"
import { Input } from "./ui/input"
import { Slider } from "@/components/ui/slider"

  

export function TrailConfig() {
    const { config, setConfig } = useTrail()
    return (
        <Dialog>
            <DialogTrigger><Wrench></Wrench></DialogTrigger>
            <DialogContent className="z-50">
                <div>
                    <HexColorPicker onChange={(e) => {
                        setConfig({...config, color: e })
                    }}></HexColorPicker>
                </div>
                <div className="space-y-2">
                    <h1>Width</h1>
                    <Input
                        type="number"
                        value={config.width}
                        onChange={(e) => {
                            setConfig({...config, width: parseInt(e.target.value) })
                        }}
                    />
                    <h1>Length</h1>
                    <Input
                        type="number"
                        value={config.length}
                        onChange={(e) => {
                            setConfig({...config, length: parseInt(e.target.value) })
                        }}
                    />
                    <h1>Duration</h1>
                    <Input type="number"
                        value={config.duration}
                        onChange={(e) => {
                            setConfig({...config, duration: parseInt(e.target.value) })
                        }} 
                    />
                    <h1>Opacity</h1>
                    <Slider defaultValue={[config.opacity]} max={1} step={0.1} onValueChange={(e) => {
                        setConfig({...config, opacity: e[0] })
                    }}/>
                </div>
            </DialogContent>
        </Dialog>
    )
}