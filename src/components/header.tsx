"use client"

export function Header() {
    return (
        <div className="fixed flex justify-end items-center w-[100vw] h-[10vh] space-x-4 p-6">
            <h1><a href="#home">Home</a></h1>
            <h1>About me</h1>
            <h1>Projects</h1>
            <h1>Contact me</h1>
        </div>
    )
}