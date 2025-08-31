import NavMenu from "../NavMenu/NavMenu";
import Settings from "../Settings";

import "./Header.styles.css";

export default function NavBar() {
  return (
    <header className="header">
      <div className="navcon">
        <NavMenu />
        <Settings />
      </div>
    </header>
  );
}
