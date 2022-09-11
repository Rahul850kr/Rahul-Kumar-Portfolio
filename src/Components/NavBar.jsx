import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import useWindowDimensions from "../utils/dimensionHelper";

const navItems = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Skills",
    route: "/skills",
  },
  {
    label: "Projects",
    route: "/projects",
  },
  {
    label: "About",
    route: "/about",
  },
];

const CustomNav = () => {
  const { width } = useWindowDimensions();
  const navbarBgColor = width < 768 ? "white" : "transparent";
  return (
    <div>
      <Navbar bg="transparent" expand="md" className="mt-2">
        {/* <Navbar.Brand href="#home"><span className="font-weight-bold">S</span></Navbar.Brand> */}
        <Link
          style={{marginLeft:"2%"}}
          className="font-weight-1000 s-logo text-white text-decoration-none "
          to="/"
        >
          R
        </Link>
        <Navbar.Toggle className="border-0" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`bg-${navbarBgColor}`}
        >
          <Nav className="mx-auto">
            {navItems.map((item) => (
              <Nav.Link className="text-center navLink" key={item.label}>
                <NavLink
                  exact
                  className="color-customBlue w-100 text-decoration-none"
                  activeClassName="font-weight-bold border border-primary shadow-sm p-3 mb-5 bg-white rounded"
                  to={item.route}
                >
                  {item.label}
                </NavLink>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNav;
