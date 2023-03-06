export default function Events() {
	const events = [
		{},
		{},
		{}
	]
	const actualEvent = {}
	return (
		<div className='bg-[#171616] py-[50px] laptop:py-[100px]'>
			<div className="max-w-[1400px] mx-auto">
				1234 
				{ /* isActive  */}
				<div className="isActive">
					<div className="date"></div>
					<div className="title"></div>
					<div className="description"></div>
				</div>
				{ /* Next  */}
				<div className="Next">
					<div className="date"></div>
					<div className="title"></div>
					<div className="description"></div>
				</div>
				{ /* Previous  */}
				<div className="Previous">
					<div className="date"></div>
					<div className="title"></div>
					<div className="description"></div>
				</div>
				{ /* Object мероприятия одного */}
				{ /*

					id: 0,
					date: 25.09.2021,
					title: Фестиваль,  previous
					description: Презентация разработок,
					img: https://api.neopixel.ru/img/events/6124878524.png
					
					id: 0,
					date: 25.09.2021,
					title: Фестиваль,  isActual
					description: Презентация разработок,
					img: https://api.neopixel.ru/img/events/6124878524.png
					
					id: 0,
					date: 25.09.2021,
					title: Фестиваль,  next
					description: Презентация разработок,
					img: https://api.neopixel.ru/img/events/6124878524.png

				
				*/}

				<div className="imageplace" >
					{/* <img src={actualEvent}></img> */}
				</div>
			</div>
		</div>
	)
}
