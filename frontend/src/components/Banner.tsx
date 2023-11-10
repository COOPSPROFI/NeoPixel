import Description from './banner/Description'
import Navbar from './UI/navbar/Navbar'
import Video from './banner/Video'
import Button from './Button'

export default function Banner() {
  return (
    <div className='relative'>
        <Navbar/>
        <Description/>
        <Video/>
        <Button/>
    </div>
  )
}
