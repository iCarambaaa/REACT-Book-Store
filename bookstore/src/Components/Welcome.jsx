import Jumbotron from "react-bootstrap/jumbotron"
import Button from "react-bootstrap/button"
import { propTypes } from "react-bootstrap/esm/Image"


const Welcome =(props) => (

<Jumbotron style={{color: "black"}}>
  <h1>Hello, {props.greetingsName}!</h1>
  <p>
    {props.subTitle}
  </p>
  
    <Button variant="primary">Learn more</Button>
  
</Jumbotron>

)

export default Welcome