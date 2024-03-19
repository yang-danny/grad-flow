import LinkedIn from '../assets/linkedin.png'
import Seek from '../assets/seek.png'
import GlassDoor from '../assets/glassdoor.png'
import indeed from '../assets/Indeed.png'
import WorkForce from '../assets/workforce.png'

const  Featured= () => {
  return (
    <div className='featured'>
        <div className="featured-box">
          <h2>Our services are featured in</h2>
        <div className="providers">
            <img src={LinkedIn} alt="" id='linkedin'/>
            <img src={Seek} alt="" id='seek'/>
            <img src={GlassDoor} alt="" />
            <img src={indeed} alt="" />
            <img src={WorkForce} alt="" id='workforce'/>
        </div>  
        </div>
    </div>
  )
}

export default Featured