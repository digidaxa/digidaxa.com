function AppHero() {
  return (
    <section id="hero" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap text-center justify-center">
            <div className="w-full self-center px-4 lg:max-w-3xl">
              <h1 className="font-bold text-dark text-3xl mt-1 mb-5 lg:text-5xl">
                Bring The Next Level Marketing Campaign
              </h1>
              <h2 className="text-base font-medium text-dark mb-8 lg:text-lg">
                With Augmented Reality & Virtual Reality: More Interactive, More Attractive, More Impactive, More engaging marketing campaigns
              </h2>
              <a href="#contact" className="text-base font-semibold bg-primary text-white rounded-full px-5 py-4 hover:shadow-xl hover:opacity-80 transition duration-75 ease-out lg:text-lg lg:px-8 lg:py-5 ">Mulai Sekarang</a>
            </div>
            {/* <div className="w-full self-end px-4">
              <div className="relative mt-10 lg:mt-0 lg:right-0">
                <img src="/mark.png" alt="logo react" className="max-w-full mx-auto"/>
                <span className="absolute -z-10 -bottom-0 left-1/2 -translate-x-1/2 md:scale-125">
                  <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#fece00" d="M44.2,-52C56.6,-42.3,65.5,-27.7,62,-15.7C58.5,-3.6,42.5,5.8,34.3,19.5C26.1,33.2,25.6,51.1,16.3,62C7,72.8,-11.2,76.6,-26.4,71.5C-41.7,66.4,-54.1,52.4,-60.6,37C-67.2,21.6,-67.8,4.7,-61.1,-6.8C-54.3,-18.3,-40,-24.5,-28.6,-34.4C-17.2,-44.2,-8.6,-57.7,3.7,-62.1C15.9,-66.5,31.8,-61.7,44.2,-52Z" transform="translate(100 100)" /></svg>
                </span>
              </div>
            </div> */}
        </div>
      </div>
    </section>
  )
}

export default AppHero;