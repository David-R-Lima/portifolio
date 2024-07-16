import { create } from "zustand";

interface Config {
    color: string
    width: number;
    height: number;
    opacity: number;
    radius: number;
    speed: number;
    duration: number
    length: number;
}

interface Trail {
    x: number;
    y: number;
    timestamp?: number;
}

interface TrialState {
    config: Config
    trail: Trail[]
    setTrail: (trail: Trail) => void
    setTrails:(trail: Trail[]) => void
    permanentTrail: Trail[][]
    setPermanentTrail: (trail: Trail) => void
    clearPermanentTrail: () => void
    setConfig: (config: Config) => void
    toMark: boolean
    setToMark: (toMark: boolean) => void
}

export const useTrail = create<TrialState>((set, get) => ({
    permanentTrail: [],
    trail: [],
    config: {
        color: "#ffff66",
        width: 1,
        height: 1,
        opacity: 1,
        radius: 2,
        speed: 1,
        duration: 200,
        length: 10
    },
    toMark: false,
    setConfig: (config: Config) => {
        set({ config })
    },
    setTrail: (trail: Trail) => {
        const newTrail = [...get().trail, { x: trail.x, y: trail.y, timestamp: trail.timestamp }];

        if (newTrail.length > get().config.length) {
          newTrail.shift();
        }

        set({ trail: newTrail })
    },
    setTrails: (trail: Trail[]) => {
        set({ trail: trail })
    },
    setPermanentTrail: (trail: Trail) => {
        const previousTrails = get().permanentTrail

        previousTrails[previousTrails.length - 1].push({ x: trail.x, y: trail.y });
        
        set({ permanentTrail: previousTrails })
    },
    clearPermanentTrail: () => {
        set({ permanentTrail: [] })
    },
    setToMark: (toMark: boolean) => {
        set({ toMark })
    }
  }))