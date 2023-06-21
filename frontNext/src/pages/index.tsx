import Banner from '../components/Banner'
import UsageSpheres from '../components/UsageSpheres'
import AddOrder from '../components/AddOrder'
import QA from '../components/QA'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
// import Events from '../components/Events'
import EventNoApi from '../components/EventNoApi'
import Events from '../components/Events'
import AddUserForm from '../components/AddUserForm'
import AddEventForm2 from '../components/AddEventForm2'
import Calcul from '../components/Calcul'
import '../styles/Home.module.css'
import Model from '../components/Model' 
import TextModel from '../components/TextModel'
import ModelUploader from '../components/ModelUploader'


export default function Home() {
  return (
    <div>

      {/* <AddUserForm/> */}
      {/* <Calcul/> */}
      <ModelUploader/>
      <AddOrder/>
      <AddEventForm2/>
      <Banner />
      <UsageSpheres />
      {/* <TextModel/> */}
      <Events/>
      {/* <EventNoApi/> */}
      <Gallery />     
      <AddOrder /> 

      <QA />
      <Footer />
    </div>
  )
}
