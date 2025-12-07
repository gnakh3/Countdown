import Footer from '../footer/Footer'
import stars from '../../assets/stars.svg'
import Timer from '../Timer/Timer'


const Structure = () => {
  return (
    <div className='bg-[#1D1E28] w-screen h-screen flex flex-col justify-between items-center pb-0 pt-[135px]' style={{backgroundImage: `url(${stars})`}}>
          <h1 className='text-[#FFFFFF] text-[18px] sm:text-[22px] font-RedHatText font-bold uppercase tracking-[7.5px] text-center'>We’re launching soon</h1>
        <Timer />
        <Footer />   
    </div>
  )
}

export default Structure