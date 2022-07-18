function HamburgerButton({ isActiveHamburger, onClickHamburger }) {
  return (
    <button 
    className={`block absolute right-4${isActiveHamburger ? ' hamburger-active' : ''} lg:hidden`}
    type="button"
    onClick={() => onClickHamburger()}
    >
      <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
      <span className="hamburger-line transition duration-300 ease-in-out"></span>
      <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
    </button>
  );
}

export default HamburgerButton;