import Card from "../components/Card"
import Category from "../components/Category"
import Header from "../components/Header"
import Lead from "../components/Lead"
import Slider from "../components/Slider"
export default function Home() {
  return (
    <div className="container">
        <Header/>
        <Slider/>
        <Lead title={`Browse Categories`}/>
        <Category/>
        <Lead title={`Top Selling`}/>
        <Card/>
    </div>
  )
}
