import Button from './Button'
import Image from './banner/Image'
import DescriptionPrint from './banner/DescriptionPrint'
import NavBarPrinter from './UI/navbar/NavBarPrinter'

export default function BannerForPrinter() {
  return (
    <div className='relative'>
        <NavBarPrinter/>
        <DescriptionPrint/>
        <Image/>
        <Button/>
    </div>
  )
}