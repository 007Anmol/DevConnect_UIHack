import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { SearchIcon, UserPlusIcon, UsersIcon, BriefcaseIcon, GlobeIcon } from "lucide-react"
import Image from "next/image"

export default function NetworkPage() {
  return (
    <div className="container pt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="md:col-span-3 space-y-6">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <UsersIcon className="h-5 w-5" />
              <h3 className="font-semibold">Your Network</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Connections</span>
                <span className="font-medium">512</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span>Following</span>
                <span className="font-medium">128</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span>Followers</span>
                <span className="font-medium">246</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Groups</h3>
            <div className="space-y-4">
              {[
                "Frontend Developers",
                "JavaScript Enthusiasts",
                "Tech Leaders Network"
              ].map((group, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm">{group}</span>
                  <Badge variant="secondary">32 new</Badge>
                </div>
              ))}
              <Button variant="outline" className="w-full">View All Groups</Button>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:col-span-6 space-y-6">
          {/* Search */}
          <Card className="p-6">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input className="pl-9" placeholder="Search your network" />
            </div>
          </Card>

          {/* Connection Suggestions */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">People You May Know</h3>
            <div className="grid gap-6">
              {[
                {
                  name: "Alex Chen",
                  role: "Product Manager at Google",
                  connections: "12 mutual connections",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                },
                {
                  name: "Emma Wilson",
                  role: "Software Architect at Amazon",
                  connections: "8 mutual connections",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                },
                {
                  name: "Michael Zhang",
                  role: "Frontend Developer at Meta",
                  connections: "15 mutual connections",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                }
              ].map((person, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{person.name}</h4>
                    <p className="text-sm text-muted-foreground">{person.role}</p>
                    <p className="text-sm text-muted-foreground mt-1">{person.connections}</p>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm">
                        <UserPlusIcon className="h-4 w-4 mr-2" />
                        Connect
                      </Button>
                      <Button variant="outline" size="sm">Ignore</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="md:col-span-3 space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Industry Connections</h3>
            <div className="space-y-4">
              {[
                { industry: "Software Development", count: "10,234" },
                { industry: "Product Management", count: "5,678" },
                { industry: "Data Science", count: "3,456" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm">{item.industry}</span>
                  <span className="text-sm font-medium">{item.count}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Events Near You</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Tech Meetup 2025",
                  date: "Mar 15",
                  attendees: "234"
                },
                {
                  title: "Developer Conference",
                  date: "Apr 1",
                  attendees: "1,234"
                }
              ].map((event, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-medium">{event.title}</h4>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{event.date}</span>
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">View All Events</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}