import React from 'react'
import './card.css'

const Card = ({ title, description, image , github , weblink }) => {

  return (
    <div className="card m-6 w-288">
     <div className=' flex flex-col justify-center align-middle'>
     <h1 className=' text-white text-center font-bold text-xl'>{title}</h1>
     <div> <img src={image} className=' h-60 -mt-9' alt='img' /></div>
     </div>
      <div className="content">
        <p className="title"><span>{description}</span></p>
        <ul className="sci">
        <li>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </li>

          <li>
            <a href={weblink} target="_blank" rel="noopener noreferrer" >
             <img src='/assests/web.png' alt='website Link'/>
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
};

const CardList = () => {
  const data = [
    {
      title: 'Stone Paper Scissor',
      description: 'Game develope in HTML, CSS & JavaScript',
      image: '/assests/sps3.png',
      github: 'https://github.com/Aaveg-Tomar/Rock-Paper-Scissor-Game',
      weblink:'https://rock-paper-scissor-game69.netlify.app/'
    },
    {
      title: 'Word Counter',
      description: 'Word count Develop in ReactJs & TailwindCSS',
      image: '/assests/wordcount.png',
      github:'https://github.com/Aaveg-Tomar/Word-Counter',
      weblink:'https://word-changer.netlify.app/'
    },
    {
      title: 'City Temperature',
      description: 'Give the Current City Temperature ',
      image: '/assests/weather.png',
      github:'https://github.com/Aaveg-Tomar/Weather-Finder',
      weblink:'https://cityweatherfindsite.netlify.app/',
    },
  ];

  return (
    <div>
      <h1 className=' flex justify-center text-5xl text-teal-400 font-serif m-2'>Projects</h1>
      <div className=" flex justify-center align-middle flex-wrap">
        {data.map((card, index) => (
          <Card
            image={card.image}
            key={index}
            title={card.title}
            description={card.description}
            github={card.github}
            weblink={card.weblink}

          />
        ))}
      </div>
    </div>
  );
};

export const Cards = () => {
  return (
    <CardList />
  )
}
