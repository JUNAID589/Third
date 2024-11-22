import { BiCricketBall } from "react-icons/bi";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom bg-transparent">
      <div className="container-fluid mx-4 my-2">
        <a
          className="navbar-brand navbar-brand-less-than-480 
		  navbar-brand-less-than-576 d-flex align-items-center"
          href="#"
        >
          <BiCricketBall className="text-light" />
          <strong className="text-light">
            <i>CRICOSTATS</i>
          </strong>
        </a>

        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon custom-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center ">
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link active" aria-current="page">
                <strong>
                  <i>HOME</i>
                </strong>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <strong>
                  <i>TEAMS</i>
                </strong>
              </a>
              <ul
                className="dropdown-menu w-50 w-md-50 mx-auto text-center"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link to="/Pakplayers" className="dropdown-item">
                    Pak Legends
                  </Link>
                </li>
                <li>
                  <Link to="/Indplayers" className="dropdown-item">
                    Ind Legends
                  </Link>
                </li>
                <li>
                  <Link to="/Ausplayers" className="dropdown-item">
                    Aus Legends
                  </Link>
                </li>
                <li>
                  <Link to="/Engplayers" className="dropdown-item">
                    Eng Legends
                  </Link>
                </li>
                <li>
                  <Link to="/Nzplayers" className="dropdown-item">
                    Nz Legends
                  </Link>
                </li>
                <li>
                  <Link to="/Slplayers" className="dropdown-item">
                    Sl Legends
                  </Link>
                </li>
                <li>
                  <Link to="/Saplayers" className="dropdown-item">
                    Sa Legends
                  </Link>
                </li>
                <li>
                  <Link to="/Wiplayers" className="dropdown-item">
                    Wi Legends
                  </Link>
                </li>
              </ul>
            </li>

		
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
