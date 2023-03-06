import React from 'react';
export default function Specifications() {
    const characteristics = [
        {'key': "Экран экспозиции", 'value': '5,5 дюйма, монохромный'},
        {'key': "Экран экспозиции", 'value': '5,5 дюйма, монохромный'},
        {'key': "Экран экспозиции", 'value': '5,5 дюйма, монохромный'},
        {'key': "Экран экспозиции", 'value': '5,5 дюйма, монохромный'}
    ]

    const dropdownIsActive = false
    const content = characteristics.map((char) => {
        return (
            <div className='flex' >
                <div className='text-right'>{char.key}</div>
                <div className='text-left'>{char.value}</div>
            </div>
        )
    })
	return (
		<div className='bg-[#171616] py-[50px] laptop:py-[100px]'>
            <div className='laptop:flex max-w-[1400px] mx-auto'>
                <div className="pr-[300px] ">
                    <h2 className=' uppercase text-lg text-white font-semibold laptop:text-[30px] laptop:text-white laptop:leading-[40px]'>характеристики принтера</h2>
                </div>
                <div className='grid grid-cols-2 text-md text-[#CECECE] w-[800px] laptop:ml-[15px] ml-0 laptop:text-[18px] laptop:leading-[27px]'>
                    
                    {/* if (index = 5 && dropdownIsActive == true) */}
                    {characteristics.map((char, index) =>
                        // {index < 5 && dropdownIsActive === true
                                <div className='flex'>
                                    {index}
                                    <div className='text-right opacity-50'>{char.key}</div>
                                    <div className='text-left'>{char.value}</div>
                                </div>
                        // }
                    )}

                    {/* {content} */}


                    {/* <div className='grid place-items-end w-[342px] pr-[15px]'>
                        <div>Экран экспозиции:</div>
                        <div>Размеры печати:</div>
                        <div>Коэф-т пропускания света:</div>
                        <div>Коэф-т контрастности:</div>
                        <div>Источник света:</div>
                        <div>Плотность светового потока:</div>
                        <div>Мощность матрицы:</div>
                        <div>Разрешение дисплея:</div>
                        <div>Размер пикселя:</div>
                        <div>Минимальная высота слоя:</div>
                        <div>Скорость печати:</div>
                        <div>Панель управления:</div>
                        <div>Интерфейс обмена данными:</div>
                        <div>Источник питания:</div>
                        <div>Программное обеспечение:</div>
                        <div>Габариты устройства:</div>
                        <div>Вес устройства:</div>
                    </div> */}
                    {/* <div className='grid place-items-start w-[450px]'>
                        <div>5,5 дюйма, монохромный</div>
                        <div>8 x 13,2 x 8 см (ВШГ)</div>
                        <div>10%</div>
                        <div>400:1</div>
                        <div>унифицированная матрица (24 светодиода)</div>
                        <div>75000 люксов</div>
                        <div>135 вт</div>
                        <div>3 840 x 2400 пикселей (4K)</div>
                        <div>25 мкм</div>
                        <div>10 мкм</div>
                        <div>10 см / час</div>
                        <div>сенсорный TFT-дисплей с диагональю 3,5 дюйма</div>
                        <div>USB-C, Wi-Fi</div>
                        <div>300 Вт</div>
                        <div>Vlare Slicer</div>
                        <div>38 x 22 x 21 см (ВШГ)</div>
                        <div>4,5 кг</div>
                    </div> */}
                </div>
            </div>
		</div>
	)
}