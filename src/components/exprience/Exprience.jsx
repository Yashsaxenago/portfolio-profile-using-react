import React from 'react'
import './exprience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Exprience = () => {
  return (
    <section id="exprience">
      <h5>What skills I Have</h5>
      <h2>My Exprience</h2>

      <div className="container exprience__container">
        <div className="exprience__webdev">
          <h3>Web Development</h3>
          <div className="exprience__content">
          <article className="exprience__details">
            <BsPatchCheckFill className='exprience__details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Exprienced</small>
            </div>
          </article>

          <article className="exprience__details">
            <BsPatchCheckFill className='exprience__details-icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Exprienced</small>
            </div>
          </article>

          <article className="exprience__details">
            <BsPatchCheckFill className='exprience__details-icon'/>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Exprienced</small>
            </div>
          </article>

          <article className="exprience__details">
            <BsPatchCheckFill className='exprience__details-icon'/>
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Exprienced</small>
            </div>
          </article>

          <article className="exprience__details">
            <BsPatchCheckFill className='exprience__details-icon'/>
            <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Exprienced</small>
            </div>
          </article>

          <article className="exprience__details">
            <BsPatchCheckFill className='exprience__details-icon'/>
            <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className="exprience__details">
            <BsPatchCheckFill className='exprience__details-icon'/>
            <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className="exprience__details">
            <BsPatchCheckFill className='exprience__details-icon'/>
            <div>
              <h4>ExpressJS</h4>
              <small className='text-light'>Intermidiate</small>
            </div>
          </article>
          </div>
        </div>
        <div className="exprience__ui">
          <h3>Hobbies   &  Interests</h3>
          <div className="exprience__content">
          <article className="exprience__details">
            <BsPatchCheckFill className='exprience__details-icon'/>
            <div>
              <h4>Stock Market</h4>
              <small className='text-light'>Intermidiate</small>
            </div>
          </article>

          <article className="exprience__details">
            <BsPatchCheckFill className='exprience__details-icon'/>
            <div>
              <h4>NASDAQ</h4>
              <small className='text-light'>Intermidiate</small>
            </div>
          </article>

          <article className="exprience__details">
            <BsPatchCheckFill className='exprience__details-icon'/>
            <div>
              <h4>Investing Money</h4>
              <small className='text-light'>Intermidiate</small>
            </div>
          </article>

          <article className="exprience__details">
            <BsPatchCheckFill className='exprience__details-icon'/>
            <div>
              <h4>Financial Knowledge</h4>
              <small className='text-light'>Intermidiate</small>
            </div>
          </article>

          <article className="exprience__details">
            <BsPatchCheckFill className='exprience__details-icon'/>
            <div>
              <h4>Novels</h4>
              <small className='text-light'>Intermidiate</small>
            </div>
          </article>

          <article className="exprience__details">
            <BsPatchCheckFill className='exprience__details-icon'/>
            <div>
              <h4>Video Editing</h4>
              <small className='text-light'>Intermidiate</small>
            </div>
          </article>

          <article className="exprience__details">
            <BsPatchCheckFill className='exprience__details-icon'/>
            <div>
              <h4>Travelling</h4>
              <small className='text-light'>Intermidiate</small>
            </div>
          </article>

          <article className="exprience__details">
            <BsPatchCheckFill className='exprience__details-icon'/>
            <div>
              <h4>Gaming</h4>
              <small className='text-light'>Intermidiate</small>
            </div>
          </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Exprience