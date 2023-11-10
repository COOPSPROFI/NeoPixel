import Banner from '../components/Banner'
import UsageSpheres from '../components/UsageSpheres'
import AddConsult from '../components/AddConsult'
import QA from '../components/QA'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Events from '../components/Events'


import '../styles/Home.module.css'



export default function Home() {
  return (
    <div>
      <Banner />
      <UsageSpheres />
      <AddConsult /> 
      <Events/>
      <Gallery />     
      <QA />
      <Footer />
    </div>
  )
}
