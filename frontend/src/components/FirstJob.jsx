import steps from '../assets/3steps.jpg'
const FirstJob = () => {
  return (
    <div className='first-job'>
        <div className="first-job-box">
            <dir className="left">
                <img src={steps} alt="" />
            </dir>
            <dir className="right">
                <h2>Launch first jobs in 3 easy steps</h2>
                <p>Learn how to look for work, interviewing tips, new skills, and what to do when you receive a job offer. </p>
            <dir className="steps">
                <div className='one'>
                <h1>&nbsp;1</h1>
                <p>finding out where jobs are advertised</p>
                </div>
                <div className='two'>
                <h1>2</h1>
                <p>customising your resume for each application</p>
                </div>
                <div className='three'>
                <h1>3</h1>
                <p>practising interviewing techniques</p>
                </div>
            </dir>
            </dir>
        </div>
    </div>
  )
}

export default FirstJob