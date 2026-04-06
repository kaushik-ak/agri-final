import "./SoilHealth.module.css"
import Header from "@/reusable_sections/Header"
import RootedInSustainability from "./sections/RootedInSustainability"
import ThePathFromSampleToScience from "./sections/ThePathFromSampleToScience"
import OurSouthLondonOffice from "./sections/OurSouthLondonOffice"
import SystemTerminal from "@/reusable_sections/Footer"
 
export default function SoilHealthPage() {
 
  return (
    <div>
      <Header />
      <RootedInSustainability />
      <ThePathFromSampleToScience />
      <OurSouthLondonOffice />
      <SystemTerminal />
    </div>
  )
}