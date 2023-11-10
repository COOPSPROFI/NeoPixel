import { useEffect } from "react";
import { useRouter } from "next/router";
import NavBarAdmin from "../../components/UI/navbar/NavBarAdmin";
import Login from "../../components/Login";
import AddEventForm2 from '../../components/AddEventForm2'
import EventTable from '../../components/EventsTable'

export default function EventPage() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/Admin");
  };

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {

      router.push("/Admin");
    }
  }, []);
    return (
      <div>
        <NavBarAdmin/>
        <div className='bg-[#1E1F21] laptop:py-[150px] p-[30px]'></div>
        <AddEventForm2/>
        <EventTable/>
      </div>
    )
  }