import "./KisanNews.module.css"
import Header from "@/reusable_sections/Header"
import NewsAndInnovations from "./sections/NewsAndInnovations"
import TheUnfairAdvantageYourCompetitorsFear from "./sections/TheUnfairAdvantageYourCompetitorsFear"
import SystemTerminal from "@/reusable_sections/Footer"
 
export default function KisanNewsPage() {
 
  return (
    <div>
      <Header />
      <NewsAndInnovations />
      <TheUnfairAdvantageYourCompetitorsFear />
      <SystemTerminal />
    </div>
  )
}