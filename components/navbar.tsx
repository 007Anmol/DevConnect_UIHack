"use client"

import { Button } from "@/components/ui/button"
import { BriefcaseIcon, HomeIcon, NetworkIcon, BellIcon, UserCircle } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()
  
  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <NetworkIcon className="h-6 w-6" />
            <span className="font-bold inline-block">DevConnect</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/">
              <Button variant={pathname === "/" ? "secondary" : "ghost"}>
                <HomeIcon className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
            <Link href="/jobs">
              <Button variant={pathname === "/jobs" ? "secondary" : "ghost"}>
                <BriefcaseIcon className="h-4 w-4 mr-2" />
                Jobs
              </Button>
            </Link>
            <Link href="/network">
              <Button variant={pathname === "/network" ? "secondary" : "ghost"}>
                <NetworkIcon className="h-4 w-4 mr-2" />
                Network
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <BellIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <UserCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  )
}