import React from 'react'
import imgDeveloper from '../../img/webDeveloper.jpg'
import gatito from '../../img/giphy.gif'

function AboutMe() {
  return (


<>

    <main className='container bg-divs mx-auto mb-32 mt-52 shadow-sm shadow-orange-300'>


        <div className='flex '>

            <div className='w-[50%]'>

              <img src={gatito} />

            </div>

            <div className='flex flex-col p-4 w-full mt-16'>

            <h2 className='uppercase lg:text-4xl text-3xl font-bold mb-10 text-color-h  text-center'>About Me 🌝</h2>
            <p className='lg:text-3xl text-2xl/relaxed mx-2 text-white text-justify'>

              I'm Alexander Sanchez, a 22 year old passionate web developer with three years of experience in frontend
              development. My main focus is React.js, but I also have solid knowledge in JavaScript, HTML5 and use Tailwind.css
              to create stylish and efficient user interfaces. In addition, I have basic knowledge in backend development, using
              Node.js and MongoDB. This knowledge has given me a thorough understanding of web development, from
              creating engaging user experiences to implementing backend solutions to ensure smooth operation.
            </p>

            <h1 className='uppercase lg:text-4xl text-3xl font-bold mb-10 text-color-h text-center mt-16'>Skills 🌚</h1>

            <div className='flex mx-auto'>

              <div>

              <ul>
              <li className='lg:text-3xl text-2xl/relaxed lg:mx-12 mx-1 text-white my-4'>🏮Javascript(ES6)</li>
            </ul>            
            <ul>
              <li className='lg:text-3xl text-2xl/relaxed lg:mx-12 mx-1 text-white my-4'>🏮HTML 5</li>
            </ul>            
            <ul>
              <li className='lg:text-3xl text-2xl/relaxed lg:mx-12 mx-1 text-white my-4'>🏮React.js</li>
            </ul>            
           

              </div>
              <div>

              <ul>
              <li className='lg:text-3xl text-2xl/relaxed lg:mx-12 mx-1 text-white my-4'>🏮CSS</li>
            </ul>            
            <ul>
              <li className='lg:text-3xl text-2xl/relaxed lg:mx-12 mx-1 text-white my-4'>🏮Tailwind.css</li>
            </ul>
            <ul>
              <li className='lg:text-3xl text-2xl/relaxed lg:mx-12 mx-1 text-white my-4'>🏮Node.js</li>
            </ul> 

              </div>

            </div>

            
            </div>





        </div>

    </main>



    </>
  )
}

export default AboutMe