import imgHero1 from "../../assets/images/desktop-image-hero-1.jpg";
import ArrowIcon from '../ArrowIcon'
import PrevIcon from '../PrevIcon'
import NextIcon from '../NextIcon'

const HeaderHome = () => {
  return (
    <>

          <header className="grid grid-cols-3 grid-rows-[4.5fr_1fr_4.5fr] lg:grid-cols-7 lg:grid-rows-[10fr_1fr]">

              <img className="w-full h-full col-start-1 col-end-4 row-start-1 row-end-3 lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3 " src={imgHero1} alt="" />

              <article className="row-start-3 row-end-4 col-start-1 col-end-4 lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-2 lg:px-16 flex flex-col px-8 py-8 justify-center">
                  <h1 className="font-bold text-3xl mb-6">  Discover innovative ways to decorate</h1>
                  <p className="text-gray-500 mb-4">We provide unmatched quality, comfort, and style for property owners across the country.
                      Our experts combine form and function in bringing your vision to life. Create a room in your
                      own style with our collection and make your property a reflection of you and what you love.
                  </p>
                  <button
                      className="font-bold text-md uppercase tracking-[1rem] flex items-center hover:fill-gray-500 fill-black">
                      <span className="hover:text-gray-500">
                          Shop now
                      </span><ArrowIcon /></button>
              </article>

              <div className="col-start-3 col-end-4 row-start-2 row-end-3 lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3 bg-black flex items-center justify-around ">
                  <button><PrevIcon /></button>
                  <button><NextIcon /></button>
              </div>
              
          </header>

    </>
  )
}

export default HeaderHome