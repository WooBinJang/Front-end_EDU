import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

function HeaderSection() {
  return (
    <div className="HeaderSection">
      <Navbar color="light" expand="md" light>
        <NavbarBrand>
          <Link to="/">Seseac</Link>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Skill</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/news">News</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Blog</NavLink>
            </NavItem>{" "}
            <NavItem>
              <NavLink href="#">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderSection;
