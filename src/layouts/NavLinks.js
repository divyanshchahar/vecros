import React from "react";

function NavLinks({ navLinks, contactLink, navLinkClass }) {
  let linkClass1 = "nav-link";
  let linkClass2 = "nav-link-highlight";

  if (navLinkClass === "nav-container-mobile") {
    linkClass1 = "nav-link-mobile";
    linkClass2 = "nav-link-highlight-mobile";
  }

  return (
    <div className={navLinkClass}>
      {navLinks.map((item) => {
        return <div className={linkClass1}>{item.linkString}</div>;
      })}
      <div className={linkClass2}>{contactLink.linkString}</div>
    </div>
  );
}

export default NavLinks;
