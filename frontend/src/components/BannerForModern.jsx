import Button from './Button'
import Video from './banner/Video'
import DescriptionModern from './banner/DescriprionModern'
import NavBarModern from './UI/navbar/NavBarModern'

export default function BannerForModern() {
  return (
    <div className='relative'>
        <NavBarModern/>
        <DescriptionModern/>
        <Video/>
        <Button/>
    </div>
  )
}