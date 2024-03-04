import { TbBrandYoutubeFilled,TbUpload } from "react-icons/tb";
import checker from "../../assets/cv-checker.jpg"
const CVCL = () => {
  return (
    <div className='cvcl'>
    <div className="cvcl-box">
    <div className="cv">
        <div className="cv-left">
             <h1>CV Builder</h1>
             <dir className="steps">
                <div className='one'>
                <h2>&nbsp;1</h2>
                <p>Watch the video for a useful overview of how to create a CV</p>
                </div>
                <div className='two'>
                <h2>2</h2>
                <p>Work through the sections, following the advice provided</p>
                </div>
                <div className='three'>
                <h2>3</h2>
                <p>Pick your template, download your CV & tailor it for each role</p>
                </div>
                <div className="star-btn">
                <TbBrandYoutubeFilled size={28} className='icon'/>
                <button>Start</button>
                </div>
                
            </dir>
        </div>
   <div className="cv-right">
   <iframe width="480" height="260" src="https://www.youtube.com/embed/0vXv46x4pbo?si=Fn8pRCtdgMh0rCIn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   </div>
    </div>
    <div className="checker">
        <div className="checker-left">
        <img src={checker} alt="" />
        </div>
   <div className="checker-right">
  <h2>Is your CV good enough?</h2>
  <h1>Try AI CV Checker</h1>
  <p>It scores your CV against more than 50 checks that commonly trip up an ATS, annoy a hiring manager to get your CV deprioritised.</p>
  <div className="upload-btn">
                <TbUpload size={28} className='icon'/>
                <button>Upload Your CV</button>
                </div>
   </div>
    </div>
    <div className="cl">
        <div className="cl-left">
             <h1>Cover Letter Builder</h1>
             <dir className="steps"> 
                <p>A Cover Letter or covering email is the most effective method you have at your disposal to get a recruiter or potential employer to read your CV. It is also the first opportunity you have to impress, so don't think of it as simply a formality.</p>
                <p>Create your cover letter quickly and easily with the Cover Letter Builder. You will also learn more about cover letters, find a selection of examples and gain useful tips and advice.</p>
                <div className="star-btn">
                <TbBrandYoutubeFilled size={28} className='icon'/>
                <button>Start</button>
                </div>
            </dir>
        </div>
   <div className="cl-right">
   <iframe width="480" height="260"  src="https://www.youtube.com/embed/tCkhl92w85U?si=oQH5nkXF9QJTLHpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   </div>
    </div>
    <div className="interview">
        <div className="interview-left">
        <iframe width="480" height="260" src="https://www.youtube.com/embed/qpkegRmPgis?si=biZgowAzYRL4S-RX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
   <div className="interview-right">
   <h1>Interview Preparation</h1>
   <p>Practise your interview technique and get instant feedback or browse the questions employers most commonly use.</p>
             <dir className="steps">
                <div className='one'>
                <h2>&nbsp;1</h2>
                <p>Interview Questions</p>
                </div>
                <div className='two'>
                <h2>2</h2>
                <p>Mock Interviews</p>
                </div>
                <div className='three'>
                <h2>3</h2>
                <p>Stay Update & Follow Up</p>
                </div>
              
            </dir>
     </div>
    </div>
    </div>
    </div>
  )
}

export default CVCL
