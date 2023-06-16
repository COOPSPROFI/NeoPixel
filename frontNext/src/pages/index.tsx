import Banner from '../components/Banner'
import UsageSpheres from '../components/UsageSpheres'
import AddOrder from '../components/AddOrder'
import QA from '../components/QA'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
// import Events from '../components/Events'
import EventNoApi from '../components/EventNoApi'
import Events from '../components/Events'
import Login from '../components/Login'
import AddUserForm from '../components/AddUserForm'
import AddEventForm2 from '../components/AddEventForm2'
import Calcul from '../components/Calcul'
import '../styles/Home.module.css'




export default function Home() {
  return (
    <div>
      {/* <Login/> */}
      {/* <AddUserForm/> */}
      {/* <Calcul/> */}
      <AddOrder/>
      <AddEventForm2/>
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
