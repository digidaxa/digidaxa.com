function AppPortfolio() {
  return (
    <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary uppercase mb-2">Portfolio</h4>
            <h2 className="font-bold text-dark text-3xl mb-4">Latest Projects</h2>
            <p className="font-medium text-md text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-5 p-4 md:w-1/2 xl:w-1/3">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="/portfolio/decorunic-virtual-showroom.png" alt="Decorunic Virtual Showroom" className="w-full mx-auto"/>
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Decorunic Virtual Showroom</h3>
            <p className="font-medium text-sm text-secondary">
              Participate in deploying Virtual Showroom Website to the Production environment.
            </p>
          </div>
          <div className="mb-5 p-4 md:w-1/2 xl:w-1/3">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="/portfolio/decorunic-3d-management.png" alt="Decorunic 3D Management" className="w-full mx-auto"/>
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Decorunic 3D Management</h3>
            <p className="font-medium text-sm text-secondary">
              Build a simple 3D and AR Product Management System such as Sketchfab, with Laravel 8, SB Admin 2, and ThreeJS.
            </p>
          </div>
          <div className="mb-5 p-4 md:w-1/2 xl:w-1/3">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="/portfolio/decorunic-blog.png" alt="Decorunic Blog" className="w-full mx-auto"/>
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Decorunic Blog</h3>
            <p className="font-medium text-sm text-secondary">
              Building blog CMS with Wordpress and Elementor
            </p>
          </div>
          <div className="mb-5 p-4 md:w-1/2 xl:w-1/3">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="/portfolio/resto-finder.png" alt="Resto Finder" className="w-full mx-auto"/>
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Resto Finder</h3>
            <p className="font-medium text-sm text-secondary">
              Making restaurant finder by applying basics of display responsibility on mobile devices, responsive layout using @media query and flexbox CSS, Optimization of UI elements such as implementing a navigation drawer, setting appropriate text spacing, Using focus and screen reader to input data on the website (Experiencing Focus & Experiencing Screen Reader).
            </p>
          </div>
          <div className="mb-5 p-4 md:w-1/2 xl:w-1/3">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="/portfolio/garbage-classification.png" alt="Garbage Classification" className="w-full mx-auto"/>
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Garbage Classification</h3>
            <p className="font-medium text-sm text-secondary">
              A Web Classification of 12 Types of Garbage built using Machine Learning and Tensorflow JS.
            </p>
          </div>
          <div className="mb-5 p-4 md:w-1/2 xl:w-1/3">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="/portfolio/ez-recipes.png" alt="EZ Recipes" className="w-full mx-auto"/>
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">EZ Recipes</h3>
            <p className="font-medium text-sm text-secondary">
              Building a Food Recipe Collection Web Application with ES6, Custom Element, NPM, Webpack, AJAX, and utilizing the TheMealDB API as data.
            </p>
          </div>
          <div className="mb-5 p-4 md:w-1/2 xl:w-1/3">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="/portfolio/simadu-bappeda.png" alt="SIMADU (Sistem Informasi Terpadu) Bappeda Jepara" className="w-full mx-auto"/>
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">SIMADU (Sistem Informasi Terpadu) Bappeda Jepara</h3>
            <p className="font-medium text-sm text-secondary">
              Building Content Management System to manage news about all innovations, activities, and competitions in the district of Jepara Using Codeigniter 3 PHP Framework as a Back-End
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppPortfolio;