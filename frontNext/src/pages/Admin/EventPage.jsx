import NavBarAdmin from '../../components/UI/navbar/NavBarAdmin'
import EventTable from '../../components/EventsTable'
import AddEventForm2 from '../../components/AddEventForm2'
import Login from '../../components/Login';
import '../../styles/Home.module.css'





export default function OrderPage() {
    return (
      <div>
        <NavBarAdmin/>
        <div className='bg-[#1E1F21] laptop:py-[150px] p-[30px]'></div>
        <Login/>
        <AddEventForm2/>
        <EventTable/>
      </div>
    )
  }