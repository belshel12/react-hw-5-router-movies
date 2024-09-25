import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-success">Navbar</span>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/movies">
              Movies
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
