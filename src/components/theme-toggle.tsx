"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Toggle } from "./ui/toggle"


export function ModeToggle() {
    //set aria-label to toggle theme
    const { theme, setTheme } = useTheme()

    return (
        <Toggle aria-label="Toggle Theme" onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark")
        }} >
            {theme === "dark" ? (
                <SunIcon className="w-6 h-6" />
            ) : (
                <MoonIcon className="w-6 h-6" />
            )}
        </Toggle>
    )
}
