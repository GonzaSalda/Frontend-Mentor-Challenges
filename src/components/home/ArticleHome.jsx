import React from 'react'
import ArrowIcon from '../ArrowIcon'


const ArticleHome = ({hero}) => {
  return (
    <>
          <img className="w-full h-full col-start-1 col-end-4 row-start-1 row-end-3 lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3 " src={hero.img} alt="" />

          <article className="row-start-3 row-end-4 col-start-1 col-end-4 lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-2 lg:px-16 flex flex-col px-8 py-8 justify-center">
              <h1 className="font-bold text-3xl mb-6">{hero.title}</h1>
              <p className="text-gray-500 mb-4">{hero.description}
              </p>
              <button
                  className="font-bold text-md uppercase tracking-[1rem] flex items-center hover:fill-gray-500 hover:text-gray-500">
                  <span>
                      Shop now
                  </span><ArrowIcon /></button>
          </article>


    </>
  )
}

export default ArticleHome