import cv from '../assets/cv.png'
const CV = () => {
  return (
    <div className='cv'>
    <div className="cv-box">
        <dir className="left">
        <h2>Getting Applied by an Expert Talent</h2>
            <p>Learn how to look for work, interviewing tips, new skills, and what to do when you receive a job offer. </p>
        <dir className="steps">
            <div className='one'>
            <h1>&nbsp;1</h1>
            <p>CV/Resume</p>
            </div>
            <div className='two'>
            <h1>2</h1>
            <p>Cover Letter</p>
            </div>
            <div className='three'>
            <h1>3</h1>
            <p>LinkedIn</p>
            </div>
        </dir>
        </dir>
        <dir className="right">
           <img src={cv} alt="" />
        </dir>
    </div>
    
</div>
  )
}

export default CV