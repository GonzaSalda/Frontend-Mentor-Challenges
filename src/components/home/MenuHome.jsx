import imageAboutLight from '../../assets/images/image-about-light.jpg'
import imageAboutDark from '../../assets/images/image-about-dark.jpg'

const MenuHome = () => {
  return (
    <>
          <main className="grid grid-cols-1 lg:grid-cols-7">
          <img className="col-span-2 w-full h-full" src={imageAboutDark} alt="" />
          <section className="col-span-3  flex flex-col justify-center  p-8">
              <h1 className="font-bold text-xl tracking-[0.5rem] uppercase mb-2">About our furniture</h1>
              <p className="text-gray-500">
                  Our multifunctional collection blends design and function to suit your individual taste.
                  Make each room unique, or pick a cohesive theme that best express your interests and what
                  inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                  or anything in between. Product specialists are available to help you create your dream space.</p>
          </section>
          <img className="col-span-2 w-full h-full" src={imageAboutLight} alt="" />
          </main>
    </>
  )
}

export default MenuHome