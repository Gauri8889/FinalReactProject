import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import a1 from "../image/ring.jpg";
import a2 from "../image/ring1.jpg";
import a3 from "../image/ring2.jpg";


const StuCard=()=>{
    return(
        <>
        <div id="cardData">
         <Card style={{ width: '18rem' }}>
      <img src={a1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <img src={a2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title> 
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <img src={a3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
        </>
        
    )
}
export default StuCard;