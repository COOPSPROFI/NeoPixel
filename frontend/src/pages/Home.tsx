import Banner from '../components/Banner'
import UsageSpheres from '../components/UsageSpheres'
import AddOrder from '../components/AddOrder'
import QA from '../components/QA'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Carusel from '../components/Carusel/Carusel'


export default function Home() {
  return (
    <div>
      <Banner />
      <UsageSpheres />
      <Gallery />
      <AddOrder />
      <QA />
      <Footer />
      {/* <Carusel/> */}
    </div>
  )
}
