import PrevIcon from '../PrevIcon'
import NextIcon from '../NextIcon'
import ArticleHome from "./ArticleHome";
import imgHero1 from "../../assets/images/desktop-image-hero-1.jpg";
import imgHero2 from "../../assets/images/desktop-image-hero-2.jpg";
import imgHero3 from "../../assets/images/desktop-image-hero-3.jpg";
import { useState } from 'react';

const ArrayHero = [
    {title: 'Discover innovative ways to decorate',
    description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    img:imgHero1,
    id:1},

    {title: ' We are available all across the globe',
    description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    img:imgHero2,
    id:2},

    {title: 'Manufactured with the best materials',
    description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of  experience in this industry, we understand what customers want for their home and office.",
    img:imgHero3,
    id:3}
]

const HeaderHome = () => {

    const [index , setIndex] = useState(0)

    const handleNext = ()=>{
        if(index >= ArrayHero.length - 1){
            return setIndex(0)
        }
        setIndex(index + 1)
    }

    const handlePrev = ()=>{
        if(index <= 0){
            return setIndex(ArrayHero.length -1)
        }
        setIndex(index - 1)
    }

  return (
    <>

          <header className="grid grid-cols-3 grid-rows-[4.5fr_1fr_4.5fr] lg:grid-cols-7 lg:grid-rows-[10fr_1fr]">

             <ArticleHome hero={ArrayHero[index]}/>
             
              <div className="col-start-3 col-end-4 row-start-2 row-end-3 lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3 bg-black flex items-center justify-around ">
                  <button className='w-full h-full hover:bg-gray-800' onClick={handlePrev}><PrevIcon className='mx-auto' /></button>
                  <button className='w-full h-full hover:bg-gray-800' onClick={handleNext}><NextIcon className='mx-auto' /></button>
              </div>

          </header>

    </>
  )
}

export default HeaderHome