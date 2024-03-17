"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeSelector() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu  >
            <DropdownMenuTrigger className="bg-inherit border-border/0 shadow-none hover:bg-transparent/15 dark:border-border/0 dark:hover:backdrop-blur-3xl dark:hover:bg-transparent/35" asChild>
                <Button variant="outline" size="icon">
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="
            bg-inherit/30 backdrop-blur-3xl text-popover-foreground dark:text-popover-background/60" align="end">
                <DropdownMenuItem className="  dark:focus:bg-transparent/30
                dark:focus:backdrop-brightness-80
                dark:focus:backdrop-blur-3xl
                " onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem className="  dark:focus:bg-transparent/30
                dark:focus:backdrop-brightness-80
                dark:focus:backdrop-blur-3xl
                "onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem className="  dark:focus:bg-transparent/30
                dark:focus:backdrop-brightness-80
                dark:focus:backdrop-blur-3xl
                "onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu >
    )
}
