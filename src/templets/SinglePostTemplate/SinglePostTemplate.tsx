import "./SinglePostTemplate.module.css"
import Header from "@/reusable_sections/Header"
import SinglePostTemplateSection from "./sections/SinglePostTemplateSection"
import SystemTerminal from "@/reusable_sections/Footer"
 
export default function SinglePostTemplatePage() {
 
  return (
    <div>
      <Header />
      <SinglePostTemplateSection />
      <SystemTerminal />
    </div>
  )
}