import menuIcon from "../assets/menu-icon.svg";

function HamburgerMenu({ stateVar, stateFunc }) {
  return (
    <div
      className="hamburger-menu"
      onClick={() => {
        stateFunc(!stateVar);
      }}
    >
      <img src={menuIcon} alt="hamburger-menu" />
    </div>
  );
}

export default HamburgerMenu;
