import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/5.png'
import IMG2 from '../../assets/4.webp'
import IMG3 from '../../assets/10.jpg'
import IMG4 from '../../assets/7.webp'
import IMG5 from '../../assets/8.jpeg'
import IMG6 from '../../assets/9.jpg'
const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Live Project',
      github: 'https://github.com/Yashsaxenago',
      demo: 'https://yashsaxenago.github.io/Event-Registration-Website/',
    },
    {
      id: 2,
      image: IMG2,
      title: 'Git Hub',
      github: 'https://github.com/Yashsaxenago',
      demo: 'https://yashsaxenago.github.io/Event-Registration-Website/',
    },
    {
      id: 3,
      image: IMG3,
      title: 'LinkedIn',
      linkedin: 'https://www.linkedin.com/in/yashsaxena0599/',
      demo: 'https://www.linkedin.com/in/yashsaxena0599/',
    },
    {
      id: 4,
      image: IMG4,
      title: 'My Stock Portfolio',
      groww: ' https://app.groww.in/v3cO/cf161b74',
      demo:  'https://app.groww.in/v3cO/cf161b74',
    },
    {
      id: 5,
      image: IMG5,
      title: 'Licenses & certifications',
      github: 'https://www.linkedin.com/in/yashsaxena0599/',
      demo: 'https://www.linkedin.com/in/yashsaxena0599/',
    },
    {
      id: 6,
      image: IMG6,
      title: 'Skills',
      github: 'https://www.linkedin.com/in/yashsaxena0599/',
      demo: 'https://www.linkedin.com/in/yashsaxena0599/',
    },
  ]

  return (
    <section id="portfolio">
      <h5>My Portfolio</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>

            )
          })
        }

      </div>
    </section>
  )
};

export default Portfolio;
