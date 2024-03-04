import logo from "../images/logo.png";
import { navs } from "./data";
const Navbar = () => {
  return (
    <>
      <div className="">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="header">
        <div className="links">
          {navs.map((link) => {
            const { id, title, href } = link;
            return (
              <div key={id} className="tile">
                <a href={href}>{title}</a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Navbar;
