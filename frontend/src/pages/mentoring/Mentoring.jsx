import { TbBrandYoutubeFilled } from "react-icons/tb";
const Mentoring = () => {
  return (
    <div className='mentoring'>
        <div className="mentoring-box">
            <div className="career-mentorship">
            <div className="career-mentorship-left">
             <h1>Career Mentorship</h1>
             <p>Career Mentoring is an online program that matches you with a working professional, volunteering to share their career journey and industry insights.</p>
             <dir className="steps">
                <div className='one'>
                <h2>&nbsp;1</h2>
                <p>Find a career mentor</p>
                </div>
                <div className='two'>
                <h2>2</h2>
                <p>Mentorship plan</p>
                </div>
                <div className='three'>
                <h2>3</h2>
                <p>Achieve career goals</p>
                </div>
                <div className='four'>
                <h2>4</h2>
                <p>Finalize and feedback </p>
                </div>
                <div className="star-btn">
                <TbBrandYoutubeFilled size={28} className='icon'/>
                <button>Start</button>
                </div>
            </dir>
        </div>
   <div className="career-mentorship-right">
   <iframe width="480" height="260" src="https://www.youtube.com/embed/Bk8I8IYBaNY?si=KN4LA4M0_Ddifk86" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   </div>
            </div>
            <div className="mock-interview">
        <div className="mock-interview-left">
        <iframe width="480" height="260" src="https://www.youtube.com/embed/T1vTofBM_uA?si=Jm-rNXUF-w9bYY8-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
   <div className="mock-interview-right">
   <h1>Mock Interview</h1>
   <p>A mock interview is a simulated job interview experience designed to help individuals practice and prepare for the real thing. It is typically conducted with a partner who takes on the role of the interviewer, asking common interview questions and providing feedback on the candidate's responses.</p>
             <dir className="steps">
                <div className='one'>
                <h2>&nbsp;1</h2>
                <p>Bring all the materials you need for a real interview</p>
                </div>
                <div className='two'>
                <h2>2</h2>
                <p>Take notes during each mock interview</p>
                </div>
                <div className='three'>
                <h2>3</h2>
                <p>Always wear professional attire</p>
                </div>
                <div className='four'>
                <h2>4</h2>
                <p>Record your responses</p>
                </div>
                <div className="star-btn">
                <TbBrandYoutubeFilled size={28} className='icon'/>
                <button>Start</button>
                </div>
            </dir>
     </div>
            </div>
            <div className="employability-programme">
            <div className="employability-programme-left">
             <h1>Employability Programme</h1>
             <p>Designed to transform employability: each section of the programme helps to understand, develop and harness a different set of employability skills. </p>
             <dir className="steps">
                <div className='one'>
                <h2>&nbsp;1</h2>
                <p>Self-awareness</p>
                </div>
                <div className='two'>
                <h2>2</h2>
                <p>Career possibilities</p>
                </div>
                <div className='three'>
                <h2>3</h2>
                <p>Workplace skills</p>
                </div>
                <div className='four'>
                <h2>4</h2>
                <p>Career well-being </p>
                </div>
                <div className="star-btn">
                <TbBrandYoutubeFilled size={28} className='icon'/>
                <button>Start</button>
                </div>
            </dir>
        </div>
   <div className="employability-programme-right">
   <iframe width="480" height="260" src="https://www.youtube.com/embed/fC8dW0n4NpA?si=PXCyJK-_oc7tLm_D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   </div>
            </div>
        </div>
    </div>
  )
}

export default Mentoring