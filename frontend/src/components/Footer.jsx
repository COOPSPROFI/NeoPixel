import React from 'react';
import footM from '../components/UI/img/footMob.png'
import tel from '../components/UI/img/Vectortel.svg'
import email from '../components/UI/img/Vectoremail.svg'
import inst from '../components/UI/img/Vectorinst.svg'
import foot from '../components/UI/img/footer.png'

const FooterMob = () => {
    return (
        <div>  
            <div className='absolute w-full pt-[20px]'>
                <div className=' mx-auto text-center laptop:max-w-3xl laptop:pt-[100px]'>
                <h1 className='uppercase text-white text-2xl font-semibold laptop:text-6xl'><span className=' text-[#26AAE1]'>несравнимый аналог.</span> доступная цена</h1>
                </div>
            </div>
            
            <div className='absolute grid grid-cols-1 gap-3  mx-auto text-white pt-[90px] place-items-center w-full laptop:flex laptop:gap-3 laptop:justify-around laptop:pt-[300px]'>      
                <div className=' text-lg font-HelveticaNeueCyr font-semibold text-white laptop:text-5xl'><img src={tel} alt='tel' className='float-left mx-3 laptop:px-5 laptop:py-3'/>8-985-192-48-93</div>
                <div className='text-lg font-HelveticaNeueCyr font-semibold text-white laptop:text-5xl'><img src={email} alt='email' className='float-left  mx-3 laptop:px-5 laptop:py-3'/>maks.bogush@neopixel3d.ru</div>
                <div className='text-lg font-HelveticaNeueCyr font-semibold text-white laptop:text-5xl'><img src={inst} alt='inst' className='float-left  mx-3 laptop:px-5 laptop:py-3 '/>@neopixel_3d</div>
            </div>   

            <img src={footM} alt="foot" className='w-full laptop:hidden'/>
            <img src={foot} alt="foot" className='w-full h-0 invisible laptop:visible laptop:h-full'/>

        </div>
    );
};

export default FooterMob;