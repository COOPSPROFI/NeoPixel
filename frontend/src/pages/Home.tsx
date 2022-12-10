import Banner from '../components/Banner'
import UsageSpheres from '../components/UsageSpheres'
import AddOrder from '../components/AddOrder'
import QA from '../components/QA'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'


export default function Home() {
  return (
    <div>
      <Banner/>
      <Gallery/>
      <UsageSpheres/>

      <AddOrder/>
      <QA/>

      <Footer/>
    </div>
  )
}
