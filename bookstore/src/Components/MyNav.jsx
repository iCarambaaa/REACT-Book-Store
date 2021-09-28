import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { propTypes } from "react-bootstrap/esm/Image";


const MyNav = (props) => (

    <Navbar bg="light" variant="light">
   
    <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  
  </Navbar>

)

export default MyNav