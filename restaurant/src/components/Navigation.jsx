import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./generalMenu.css";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" className="textStyle h2">LD Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 textStyle "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/westernFoods">Western Foods</Nav.Link>
            <Nav.Link href="/orientalFoods">Oriental Foods</Nav.Link>
            <Nav.Link href="/sweets">Sweets</Nav.Link>
            <Nav.Link href="/drinks">Drinks</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
