import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/google.png'
import IMG2 from '../../assets/memories.png'
import IMG3 from '../../assets/currency.png'


const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Google Search Clone</h3>
            <small className='text-light'>HTML | CSS | JS</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Thirsanth/Google-Search-clone" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Memories Web App</h3>
            <small className='text-light'>Mongo db |Express js |React js |Node Js</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Thirsanth/memories-app" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>Currency Converter</h3>
            <small className='text-light'>HTML | CSS | Bootstrap |Exchange Rate API</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Thirsanth/Currency-Converter" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
            
        </article>
      
      </div>
    </section>
  )
}

export default Myprojects