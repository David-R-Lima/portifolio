'use client'

import { Construction } from 'lucide-react'
import { useState, useEffect } from 'react'

export function WorkInProgress() {
  const [display, setDisplay] = useState<string>("false")

  useEffect(() => {
    const wip = localStorage.getItem('wip')
    // Show if "wip" is not set or not 'false'
    setDisplay(wip ?? "true")
  }, [])

  useEffect(() => {
    if (display !== 'false') {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [display])

  const dismiss = () => {
    localStorage.setItem('wip', 'false')
    setDisplay("false")
  }

  if (display === "false") return null

  return (
    <div className="absolute top-0 bg-black/90 flex flex-col items-center justify-center text-primary p-4 text-center z-50 w-[100vw] h-[100vh]">
        <div className='flex flex-col items-center justify-center bg-black w-[50vw] space-y-4'>
            <p>
                <Construction />
            </p>
            <p className="text-sm">
                This portifolio is a work in progress. Please check back later!
            </p>
            <button
                className="mt-2 text-xs underline"
                onClick={dismiss}
                type="button"
            >
                Dismiss
            </button>
        </div>
    </div>
  )
}
