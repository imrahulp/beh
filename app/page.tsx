import Hero from "@/components/hero"
import TeamMembers from "@/components/team-members"
import Gallery from "@/components/gallery"
import Feedback from "@/components/feedback"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TeamMembers />
      <Gallery />
      <Feedback />
      <Contact />
    </main>
  )
}

