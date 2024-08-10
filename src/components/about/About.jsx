import React from 'react'
import './about.css'
import myImage from '../../assets/my-image.png'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>B-Tech Computer Science and Engineering<br /><i>Jain University</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small>9.006</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Web applications</li>
                      {/* <li>Mobile Applications</li> */}
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                    I'm a <b>Computer Science and Engineering Undergradute</b> at Jain university Banglore. 
I'm a passionate and motivated Computer Science student seeking a dynamic internship opportunity to apply and broaden my technical skills. With a solid academic background in computer science and practical experience in multiple programming languages, I am excited to contribute to cutting-edge projects and gain valuable insights from industry experts. I am a quick learner, always ready to tackle challenges and eager to grow within the field.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About