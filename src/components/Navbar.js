/* eslint-disable jsx-a11y/anchor-is-valid */
function Navbar({ isActiveHamburger }) {
  return (
    <nav id="nav-menu" className={`${isActiveHamburger ? '': 'hidden'} absolute py-5 bg-white rounded-lg shadow-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}>
      <ul className="block lg:flex">
        <li className="grup">
          <a href="#" className="nav-link hover:border-b-2 border-primary active:font-medium transition-all ease-in duration-75">Home</a>
        </li>
        <li>
          <a href="#about" className="nav-link hover:border-b-2 border-primary active:font-medium transition-all ease-in duration-75">About</a>
        </li>
        <li>
          <a href="#portfolio" className="nav-link hover:border-b-2 border-primary active:font-medium transition-all ease-in duration-75">Portfolio</a>
        </li>
        <li>
          <a href="#clients" className="nav-link hover:border-b-2 border-primary active:font-medium transition-all ease-in duration-75">Clients</a>
        </li>
        <li>
          <a href="#blog" className="nav-link hover:border-b-2 border-primary active:font-medium transition-all ease-in duration-75">Blog</a>
        </li>
        <li>
          <a href="#contact" className="nav-link hover:border-b-2 border-primary active:font-medium transition-all ease-in duration-75">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
