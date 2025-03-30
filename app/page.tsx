import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { BriefcaseIcon, MessageSquareIcon, ThumbsUpIcon, ShareIcon, BookmarkIcon, TrendingUpIcon, GlobeIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container pt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Profile Section */}
        <Card className="md:col-span-3 p-6">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-sm text-muted-foreground">Senior Software Engineer</p>
            <div className="flex gap-2 mt-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Node.js</Badge>
            </div>
            <Separator className="my-4" />
            <div className="w-full space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Profile views</span>
                <span className="font-medium">1,234</span>
              </div>
              <div className="flex justify-between">
                <span>Post impressions</span>
                <span className="font-medium">4,321</span>
              </div>
              <div className="flex justify-between">
                <span>Network connections</span>
                <span className="font-medium">512</span>
              </div>
            </div>
            <Button className="w-full mt-4" variant="outline">Edit Profile</Button>
          </div>
        </Card>

        {/* Main Content */}
        <div className="md:col-span-6 space-y-6">
          {/* Create Post */}
          <Card className="p-4">
            <div className="flex gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-4">
                <Input placeholder="Share your thoughts..." className="bg-muted" />
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">📷 Photo</Button>
                  <Button variant="outline" size="sm">📎 Article</Button>
                  <Button variant="outline" size="sm">📊 Poll</Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Trending Topics */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUpIcon className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Trending in Tech</h3>
            </div>
            <div className="space-y-3">
              {["#WebDevelopment", "#AI", "#CloudComputing"].map((topic) => (
                <div key={topic} className="flex items-center justify-between">
                  <span className="text-sm text-primary">{topic}</span>
                  <span className="text-xs text-muted-foreground">1.2k posts</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Posts */}
          <Card className="p-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Sarah Wilson"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">Sarah Wilson</h3>
                  <Badge variant="outline">Pro</Badge>
                  <span className="text-sm text-muted-foreground">• 2h ago</span>
                </div>
                <p className="text-sm text-muted-foreground">Frontend Developer at TechCorp</p>
                <p className="mt-2">Excited to share that I've just launched my new portfolio website! Built with Next.js and Tailwind CSS. Check it out! 🚀</p>
                <div className="mt-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                    alt="Portfolio Preview"
                    width={600}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <div className="flex gap-4 mt-4">
                  <Button variant="ghost" size="sm">
                    <ThumbsUpIcon className="h-4 w-4 mr-2" />
                    245
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageSquareIcon className="h-4 w-4 mr-2" />
                    32
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ShareIcon className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="ghost" size="sm">
                    <BookmarkIcon className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>
            </div>
            <Separator />
            <div className="flex items-start gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Michael Brown"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">Michael Brown</h3>
                  <span className="text-sm text-muted-foreground">• 4h ago</span>
                </div>
                <p className="text-sm text-muted-foreground">Tech Lead at InnovateCo</p>
                <p className="mt-2">Looking for senior backend developers with experience in Node.js and PostgreSQL. Remote positions available! DM me if interested. #hiring #nodejs #postgresql</p>
                <div className="flex gap-4 mt-4">
                  <Button variant="ghost" size="sm">
                    <ThumbsUpIcon className="h-4 w-4 mr-2" />
                    182
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageSquareIcon className="h-4 w-4 mr-2" />
                    28
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ShareIcon className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="md:col-span-3 space-y-6">
          {/* Jobs Section */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Recommended Jobs</h3>
              <Link href="/jobs" className="text-sm text-primary hover:underline">View All</Link>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Senior Frontend Developer",
                  company: "TechCorp",
                  location: "Remote",
                  salary: "$120k - $150k"
                },
                {
                  title: "Full Stack Engineer",
                  company: "InnovateCo",
                  location: "San Francisco",
                  salary: "$130k - $160k"
                },
                {
                  title: "React Native Developer",
                  company: "MobileFirst",
                  location: "Remote",
                  salary: "$100k - $130k"
                }
              ].map((job, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start gap-3">
                    <BriefcaseIcon className="h-5 w-5 text-muted-foreground mt-1" />
                    <div>
                      <h4 className="font-medium">{job.title}</h4>
                      <p className="text-sm text-muted-foreground">{job.company} • {job.location}</p>
                      <p className="text-sm font-medium">{job.salary}</p>
                    </div>
                  </div>
                  {index !== 2 && <Separator />}
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">View All Jobs</Button>
          </Card>

          {/* Network Growth */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Grow Your Network</h3>
              <Link href="/network" className="text-sm text-primary hover:underline">See All</Link>
            </div>
            <div className="space-y-4">
              {[
                {
                  name: "Alex Chen",
                  role: "Product Manager at Google",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                },
                {
                  name: "Emma Wilson",
                  role: "Software Architect at Amazon",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                }
              ].map((person, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{person.name}</h4>
                    <p className="text-xs text-muted-foreground">{person.role}</p>
                  </div>
                  <Button variant="outline" size="sm">Connect</Button>
                </div>
              ))}
            </div>
          </Card>

          {/* Global Trends */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <GlobeIcon className="h-5 w-5" />
              <h3 className="font-semibold">Global Tech Trends</h3>
            </div>
            <div className="space-y-3 text-sm">
              <p>• AI & Machine Learning continues to grow</p>
              <p>• Remote work adoption increases by 27%</p>
              <p>• Web3 development on the rise</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}