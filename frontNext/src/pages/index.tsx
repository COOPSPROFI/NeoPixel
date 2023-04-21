import Banner from '../components/Banner'
import UsageSpheres from '../components/UsageSpheres'
import AddOrder from '../components/AddOrder'
import QA from '../components/QA'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
// import Events from '../components/Events'
import Events from '../components/Events'
import Test from '../components/Test'
import '../styles/Home.module.css'




export default function Home() {
  return (
    <div>
      <Test/>
      <Banner />
      <UsageSpheres />
      <Events/>
      {/* <EventNoApi/> */}
      <Gallery />     
      <AddOrder />
      <QA />
      <Footer />
    </div>
  )
}