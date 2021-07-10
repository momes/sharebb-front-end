import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./NavigationBar.css";

/** NavigationBar Component
 * 
 * Props:
 * - currUser {}
 * 
 *  App -> NavigationBar
 */
function NavigationBar({currUser}) {
  if (!currUser) {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">sharebnb</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/listings">Listings</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
  if (currUser) {
    return (
        <Navbar className="Navigation-Bar" expand="lg">
          <Navbar.Brand href="/">sharebnb</Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/listings">Book a Sharebnb</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="/share">Share My Space</Nav.Link>
              <NavDropdown alignRight title={currUser.firstName} id="basic-nav-dropdown">
                <NavDropdown.Item href="/my-listings">My Listings</NavDropdown.Item>
                <NavDropdown.Item href="/my-bookings">My Bookings</NavDropdown.Item>
                <NavDropdown.Item href="/my-messages">Messages</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/my-profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/log-out">Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
  }
  
}

export default NavigationBar;