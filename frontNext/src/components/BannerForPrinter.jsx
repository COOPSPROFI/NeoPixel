import Button from './Button'
import Picture from './banner/Picture'
import DescriptionPrint from './banner/DescriptionPrint'
import NavBarPrinter from './UI/navbar/NavBarPrinter'

export default function BannerForPrinter() {
  return (
    <div className='relative'>
        <NavBarPrinter/>
        <DescriptionPrint/>
        <Picture/>
        <Button/>
    </div>
  )
}