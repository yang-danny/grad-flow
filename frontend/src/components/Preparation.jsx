import React from 'react'
import interview from '../assets/interview.jpg'
const Preparation = () => {
  return (
    <div className='preparation'>
        <div className="preparation-box">
            <dir className="left">
                <img src={interview} alt="" />
            </dir>
            <dir className="right">
                <h2>Preparation is key to a successful interview</h2>
                <p>The more you practice and research, the more confident and well-prepared... </p>
            <dir className="steps">
                <div className='one'>
                <h1>&nbsp;1</h1>
                <p>Mock interview</p>
                </div>
                <div className='two'>
                <h1>2</h1>
                <p>e-Learning</p>
                </div>
                <div className='three'>
                <h1>3</h1>
                <p>Mentoring</p>
                </div>
            </dir>
            </dir>
        </div>
        
    </div>
  )
}

export default Preparation