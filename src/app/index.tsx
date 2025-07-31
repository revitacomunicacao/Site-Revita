import useSeo from "@/hooks/useSeo"
import { Institutional } from "./home/components/Institucional"
import { Banner } from "./home/components/Banner"
import { Servicos } from "./home/components/Servicos"
import { Portfolio } from "./home/components/Portfolio"
import { Experiencia } from "./home/components/Experiencia"
import { LogoCarousel } from "./home/components/LogoCarousel"

export default function HomePage() {
  useSeo({
    title: "Home",
    description: "Home"
  })
  return (
    <main>
      <Banner />
      <Institutional />
      <Servicos />
      <Experiencia />
      <Portfolio />
      <LogoCarousel />
    </main>
  )
}
