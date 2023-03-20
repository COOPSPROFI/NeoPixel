import Avtors from "../components/Avtors";
import NavBarAvtors from "../components/UI/navbar/NavBarAvtors";

export default function AvtorsPage() {
    return (
        <div>
            <div className='relative bg-black py-[200px]'>
                <NavBarAvtors/>
            </div>
            <Avtors/>
        </div>
    )
}