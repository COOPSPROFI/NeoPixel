export default function Video() {
  return (
    <div className='w-full z-0'>
        <video className='object-cover w-screen' src={require('../../assets/banner/backgroundVideo.mp4')} autoPlay muted loop></video>
    </div>
  )
}
