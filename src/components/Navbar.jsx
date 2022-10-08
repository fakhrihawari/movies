import { NavLink } from "react-router-dom";
import { Nav, Navbar as NavbarBs, Container } from "react-bootstrap";

const Navbar = () => {

  return (
    <NavbarBs bg="light" expand="sm"  className="bg-white shadow-md py-4 movie">
      <Container>
        <Nav.Link to="/" as={NavLink} className="font-poppins navbar-brand font-weight-bold">
          Moovies
        </Nav.Link>
        <NavbarBs.Toggle aria-controls="basic-navbar-nav">
          {/* <Menu/> */}
        </NavbarBs.Toggle>
        <NavbarBs.Collapse id="basic-navbar-nav" className="pl-3">
          <Nav className="me-auto font-poppins">
            <Nav.Link to="/search" as={NavLink}>Search</Nav.Link>
            <Nav.Link to="/favorite" as={NavLink}>Favorite</Nav.Link>
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
