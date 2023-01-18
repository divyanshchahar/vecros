import { useState } from "react";
import BrandingLogo from "../components/BrandingLogo";
import HamburgerMenu from "../components/HamburgerMenu";
import NavLinks from "./NavLinks";

function TopNAvBar() {
  const [showOptions, setShowOptions] = useState(true);

  const navLinkData = [
    {
      linkString: "JETPIX AUTONOMY",
      linkaAddress: "#",
    },
    { linkString: "PRODUCTS", linkaAddress: "#" },
    {
      linkString: "SOLUTIONS",
      linkaAddress: "#",
    },
    {
      linkString: "RESOURCES",
      linkaAddress: "#",
    },
    { linkString: "SUPPORT", linkaAddress: "#" },
    { linkString: "ABOUT", linkaAddress: "#" },
  ];

  const contactLink = { linkString: "CONTACT US", linkaAddress: "#" };

  const navLinkClass1 = "nav-container-mobile";
  const navLinkClass2 = "nav-container";

  return (
    <>
      <div className="top-nav-bar">
        <BrandingLogo />
        <NavLinks
          navLinks={navLinkData}
          contactLink={contactLink}
          navLinkClass={navLinkClass2}
        />
        <HamburgerMenu stateVar={showOptions} stateFunc={setShowOptions} />
      </div>
      {showOptions && (
        <NavLinks
          navLinks={navLinkData}
          contactLink={contactLink}
          navLinkClass={navLinkClass1}
        />
      )}
    </>
  );
}

export default TopNAvBar;
