import Button from './Button'
import NavBarUsers from './UI/navbar/NavBarUsers'
import Video from './banner/Video'
import DescriptionUser from './banner/DescriptionUser'

export default function BannerForUser() {
  return (
    <div className='relative'>
        <NavBarUsers/>
        <DescriptionUser/>
        <Video/>
        <Button/>
    </div>
  )
}