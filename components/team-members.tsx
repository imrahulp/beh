"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, Instagram, Linkedin, Twitter } from "lucide-react"

// Sample team data - replace with your actual team members
const teamMembers = [
  {
    id: 1,
    name: "Team Member 1",
    role: "Designer",
    bio: "Creative designer with a passion for innovative solutions.",
    image: "/placeholder.svg?height=400&width=400",
    portfolio: "https://portfolio1.example.com",
    social: {
      twitter: "https://twitter.com/member1",
      instagram: "https://instagram.com/member1",
      linkedin: "https://linkedin.com/in/member1",
      github: "https://github.com/member1",
    },
  },
  {
    id: 2,
    name: "Team Member 2",
    role: "Developer",
    bio: "Full-stack developer specializing in interactive experiences.",
    image: "/placeholder.svg?height=400&width=400",
    portfolio: "https://portfolio2.example.com",
    social: {
      twitter: "https://twitter.com/member2",
      instagram: "https://instagram.com/member2",
      linkedin: "https://linkedin.com/in/member2",
      github: "https://github.com/member2",
    },
  },
  {
    id: 3,
    name: "Team Member 3",
    role: "Illustrator",
    bio: "Talented illustrator bringing characters and concepts to life.",
    image: "/placeholder.svg?height=400&width=400",
    portfolio: "https://portfolio3.example.com",
    social: {
      twitter: "https://twitter.com/member3",
      instagram: "https://instagram.com/member3",
      linkedin: "https://linkedin.com/in/member3",
      github: "https://github.com/member3",
    },
  },
  {
    id: 4,
    name: "Team Member 4",
    role: "Animator",
    bio: "Skilled animator with an eye for detail and movement.",
    image: "/placeholder.svg?height=400&width=400",
    portfolio: "https://portfolio4.example.com",
    social: {
      twitter: "https://twitter.com/member4",
      instagram: "https://instagram.com/member4",
      linkedin: "https://linkedin.com/in/member4",
      github: "https://github.com/member4",
    },
  },
  {
    id: 5,
    name: "Team Member 5",
    role: "Content Creator",
    bio: "Creative content creator with a knack for storytelling.",
    image: "/placeholder.svg?height=400&width=400",
    portfolio: "https://portfolio5.example.com",
    social: {
      twitter: "https://twitter.com/member5",
      instagram: "https://instagram.com/member5",
      linkedin: "https://linkedin.com/in/member5",
      github: "https://github.com/member5",
    },
  },
  {
    id: 6,
    name: "Team Member 6",
    role: "Project Manager",
    bio: "Organized project manager keeping everything running smoothly.",
    image: "/placeholder.svg?height=400&width=400",
    portfolio: "https://portfolio6.example.com",
    social: {
      twitter: "https://twitter.com/member6",
      instagram: "https://instagram.com/member6",
      linkedin: "https://linkedin.com/in/member6",
      github: "https://github.com/member6",
    },
  },
]

export default function TeamMembers() {
  const [selectedMember, setSelectedMember] = useState(null)

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Meet Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                <div className="relative h-80 cursor-pointer" onClick={() => setSelectedMember(member)}>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h3 className="text-white text-xl font-bold">{member.name}</h3>
                      <p className="text-white/80">{member.role}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground mb-4">{member.role}</p>
                  <p className="mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Twitter size={18} />
                        <span className="sr-only">Twitter</span>
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Instagram size={18} />
                        <span className="sr-only">Instagram</span>
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin size={18} />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={18} />
                        <span className="sr-only">GitHub</span>
                      </a>
                    )}
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors ml-auto"
                    >
                      <ExternalLink size={18} />
                      <span className="sr-only">Portfolio</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {selectedMember && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <div
              className="bg-background rounded-lg max-w-2xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80">
                <Image
                  src={selectedMember.image || "/placeholder.svg"}
                  alt={selectedMember.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedMember.name}</h3>
                <p className="text-muted-foreground mb-4">{selectedMember.role}</p>
                <p className="mb-6">{selectedMember.bio}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    {Object.entries(selectedMember.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {platform === "twitter" && <Twitter size={20} />}
                        {platform === "instagram" && <Instagram size={20} />}
                        {platform === "linkedin" && <Linkedin size={20} />}
                        {platform === "github" && <Github size={20} />}
                        <span className="sr-only">{platform}</span>
                      </a>
                    ))}
                  </div>
                  <a
                    href={selectedMember.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    Visit Portfolio <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

