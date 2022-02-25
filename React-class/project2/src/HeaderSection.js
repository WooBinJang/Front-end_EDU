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
  // 리갱트 라우터
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
        <ul>
          <li>
            <Link to="/news/news01">뉴스1</Link>
          </li>
          <li>
            <Link to="/news/news02">뉴스2</Link>
          </li>
          <li>
            <Link to="/news/news03">뉴스3</Link>
          </li>
          <li>
            <Link to="/news/news04">뉴스4</Link>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default HeaderSection;
