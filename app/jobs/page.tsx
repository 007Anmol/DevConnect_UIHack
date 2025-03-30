import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Select } from "@/components/ui/select"
import { BriefcaseIcon, MapPinIcon, SearchIcon, FilterIcon, BookmarkIcon } from "lucide-react"

export default function JobsPage() {
  return (
    <div className="container pt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Filters */}
        <div className="md:col-span-3 space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Filters</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Experience Level</label>
                <div className="space-y-2">
                  {["Entry Level", "Mid Level", "Senior", "Lead"].map((level) => (
                    <div key={level} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{level}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <label className="text-sm font-medium mb-2 block">Job Type</label>
                <div className="space-y-2">
                  {["Full-time", "Part-time", "Contract", "Remote"].map((type) => (
                    <div key={type} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <label className="text-sm font-medium mb-2 block">Salary Range</label>
                <div className="space-y-2">
                  {["$0-50k", "$50k-100k", "$100k-150k", "$150k+"].map((range) => (
                    <div key={range} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{range}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:col-span-9 space-y-6">
          {/* Search */}
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input className="pl-9" placeholder="Search jobs by title, company, or keywords" />
              </div>
              <div className="flex gap-4">
                <Input placeholder="Location" className="w-[200px]" />
                <Button>
                  <SearchIcon className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </Card>

          {/* Job Listings */}
          <div className="space-y-4">
            {[
              {
                title: "Senior Frontend Developer",
                company: "TechCorp",
                location: "Remote",
                salary: "$120k - $150k",
                type: "Full-time",
                skills: ["React", "TypeScript", "Node.js"],
                posted: "2 days ago",
                description: "We're looking for a Senior Frontend Developer to join our growing team..."
              },
              {
                title: "Full Stack Engineer",
                company: "InnovateCo",
                location: "San Francisco",
                salary: "$130k - $160k",
                type: "Full-time",
                skills: ["Python", "React", "AWS"],
                posted: "1 day ago",
                description: "Join our team as a Full Stack Engineer and help build the future of..."
              },
              {
                title: "DevOps Engineer",
                company: "CloudTech",
                location: "Remote",
                salary: "$140k - $170k",
                type: "Full-time",
                skills: ["Kubernetes", "AWS", "CI/CD"],
                posted: "3 days ago",
                description: "Looking for an experienced DevOps Engineer to strengthen our infrastructure team..."
              }
            ].map((job, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <BookmarkIcon className="h-5 w-5 text-muted-foreground cursor-pointer" />
                    </div>
                    <p className="text-primary font-medium">{job.company}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPinIcon className="h-4 w-4" />
                      {job.location}
                      <span>•</span>
                      {job.type}
                      <span>•</span>
                      {job.posted}
                    </div>
                    <p className="font-medium">{job.salary}</p>
                  </div>
                  <Button>Apply Now</Button>
                </div>
                <p className="mt-4 text-muted-foreground">{job.description}</p>
                <div className="flex gap-2 mt-4">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}