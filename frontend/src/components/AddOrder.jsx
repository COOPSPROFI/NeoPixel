import React from 'react';
export default function AddOrder() {
    return (
        <div className='bg-[#171616] py-[50px] laptop:py-[100px]'>
            <div className='text-white flex mx-auto  p-[10px] justify-center laptop:max-w-7xl laptop:mb-[140px]'>
                <div className='text-lg text-white font-HelveticaNeueCyr font-semibold text-center mb-6 laptop:text-5xl'>ПОЛУЧИ КОНСУЛЬТАЦИЮ ОНЛАЙН</div>
            </div>
            <div className='laptop:flex laptop:justify-center'>
                <form className='mx-4'>
                    <div className='grid grid-cols-1 gap-4 font-inter laptop:flex'>
                        <div className="form-group mb-6 flex-auto laptop:w-[400px] form-group mb-6 pl-[20px]">
                            <input type="email" className="w-full form-control pl-[20px] laptop:h-[75px] text-xl font-normal text-gray-700 bg-[#1E1F21] bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-[#1E1F21] focus:border-blue-600 focus:outline-none" id="exampleInput8" placeholder="Электронная почта" />
                        </div>
                        <div className="form-group mb-6 flex-auto w-50 pl-[20px]">
                            <input type="text" className="w-full form-control pl-[20px] laptop:h-[75px] text-xl font-normal text-gray-700 bg-[#1E1F21] bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-[#1E1F21] focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Имя" />
                        </div>
                        <div className="form-group mb-6 flex-auto w-25 pl-[20px]">
                            <input type="tel" className="w-full form-control pl-[20px] laptop:h-[75px] text-xl font-normal text-gray-700 bg-[#1E1F21] bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-[#1E1F21] focus:border-blue-600 focus:outline-none" id="exampleInput8" placeholder="Телефон" />
                        </div>
                        <div className="form-group mb-6 flex-auto  laptop:w-[275px] pl-[20px]">
                            <button type="submit" className="w-full h-[50px] laptop:h-[75px] bg-[#26AAE1] text-white font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-[#26AAE1] hover:shadow-lg focus:bg-[#26AAE1] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#26AAE1]active:shadow-lg transition duration-150 ease-in-out mb-6 shadow-2xl shadow-[#0D5675B2] ">Оставить заявку</button>
                        </div>
                    </div>
                    <div className="form-group form-check text-center mb-6">
                        <input type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" id="exampleCheck87" />
                        <label className="form-check-label inline-block text-white text-lg" htmlFor="exampleCheck87">Я соглашаюсь на обработку персональных данных</label>
                    </div>

                </form>
            </div>
        </div>
    );
};