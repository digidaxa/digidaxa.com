function AppHero() {
  return (
    <section id="hero" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">Hello 👋<span className="block font-bold text-dark text-4xl my-1"><span className="text-secondary">I'm </span>Virgiawan Teguh Kusuma</span></h1>
              <h2 className="font-medium text-secondary text-lg mb-3 lg:text-2xl">
                <span className="text-dark">Front-End Web Developer </span>& Machine Learning Enthusiast.
              </h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed">I'm currently learning as <span className="text-dark">React Developer</span> at <span className="text-dark">IDCamp 2022 X Dicoding Indonesia and Work in Decorunic Space Saving Furniture as Web Developer.</span></p>
              <a href="#contact" className="text-base font-semibold bg-primary rounded-full px-6 py-3 hover:shadow-xl hover:opacity-80 transition duration-300 ease-out">Contact Me</a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-0 lg:right-0">
                <img src="/mark.png" alt="logo react" className="max-w-full mx-auto"/>
                <span className="absolute -z-10 -bottom-0 left-1/2 -translate-x-1/2 md:scale-125">
                  <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#fece00" d="M44.2,-52C56.6,-42.3,65.5,-27.7,62,-15.7C58.5,-3.6,42.5,5.8,34.3,19.5C26.1,33.2,25.6,51.1,16.3,62C7,72.8,-11.2,76.6,-26.4,71.5C-41.7,66.4,-54.1,52.4,-60.6,37C-67.2,21.6,-67.8,4.7,-61.1,-6.8C-54.3,-18.3,-40,-24.5,-28.6,-34.4C-17.2,-44.2,-8.6,-57.7,3.7,-62.1C15.9,-66.5,31.8,-61.7,44.2,-52Z" transform="translate(100 100)" /></svg>
                </span>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AppHero;