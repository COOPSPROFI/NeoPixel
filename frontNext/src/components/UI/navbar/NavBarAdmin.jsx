import Link from "next/link"
import logo from './logo2.svg'
import Image from 'next/image';

export default function NavBarAdmin() {
  return (
      	<div className='w-full top-12 py-[30px] z-10 bg-[#1E1F21] laptop:absolute laptop:bg-transparent '>
            <div className='flex justify-center laptop:absolute relative laptop:invisible visible py-[20px] mx-5'>
				<Image src={logo} alt="logo" />
			</div>
			<div className='flex laptop:justify-between laptop:items-center laptop:max-w-7xl laptop:mx-auto'>
				<div className='absolute laptop:relative invisible laptop:visible'>
					<Link href="/"><Image src={logo} alt="logo" /></Link>
				</div>
				<div className='flex items-center w-full'>
					<nav className="flex text-white text-sm flex-row gap-2 mx-auto laptop:gap-10 items-center laptop:leading-6 laptop:text-xl">
						<Link href="/Admin" className="text-blue-500">ГлавнаяA</Link>
						<Link href="/Admin/EventPage" className="hover:text-blue-600">Мероприятия</Link>
						<Link href="/Admin/OrderPage" className="hover:text-blue-600">Заказы</Link>
						<Link href="/Admin/Zayavki" className="hover:text-blue-600">Заявки</Link>
						<Link href="/Admin/EmployeesPage" className="hover:text-blue-600">Сотрудники</Link>
						<Link href="/Admin/Gallery" className="hover:text-blue-600">Галерея</Link>
						<Link href="/Login" className="hover:text-blue-600">Войти</Link>
					</nav>
				</div>
			</div>
		</div>
  )
}
