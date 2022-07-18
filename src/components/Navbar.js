/* eslint-disable jsx-a11y/anchor-is-valid */
function Navbar({ isActiveHamburger }) {
  return (
    <nav id="nav-menu" className={`${isActiveHamburger ? '': 'hidden'} absolute py-5 bg-white rounded-lg shadow-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}>
      <ul className="block lg:flex">
        <li className="grup">
          <a href="#" className="nav-link">Home</a>
        </li>
        <li>
          <a href="#about" className="nav-link">About</a>
        </li>
        <li>
          <a href="#portfolio" className="nav-link">Portfolio</a>
        </li>
        <li>
          <a href="#clients" className="nav-link">Clients</a>
        </li>
        <li>
          <a href="#blog" className="nav-link">Blog</a>
        </li>
        <li>
          <a href="#contact" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
