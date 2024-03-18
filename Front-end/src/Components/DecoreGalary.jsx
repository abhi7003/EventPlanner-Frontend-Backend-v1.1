

import img1 from "../imges/1.jpg"
import img2 from "../imges/2.jpg"
import img3 from "../imges/3.jpg"
import img4 from "../imges/4.jpg"
import img5 from "../imges/8.jpg"
import img6 from "../imges/6.jpg"
import NavBar from './NavBar';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import BottomNav from "./BottomNav"

function DecoreGalary() {
  return (
    <div className="container-fluid">
    <h4 id="h4">EVENTPLANER</h4>
    <NavBar></NavBar>
    

  
    <CardGroup className="mt-5">
      <Card>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Wedding Theme 1</Card.Title>
          <Card.Text>
          A wedding is a celebration or ceremony of marriage. Besides being a formal way to mark the union of two people, weddings can be while they're taking the 7 steps.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <strong className="text-muted">Price:- 50000 </strong>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img4} />
        <Card.Body>
          <Card.Title>Wedding Theme 2</Card.Title>
          <Card.Text>
          A wedding is a celebration or ceremony of marriage. Besides being a formal way to mark the union of two people, weddings can be while they're taking the 7 steps.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <strong className="text-muted">Price:- 50000</strong>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img5} />
        <Card.Body>
          <Card.Title>Wedding Theme 3</Card.Title>
          <Card.Text>
          A wedding is a celebration or ceremony of marriage. Besides being a formal way to mark the union of two people, weddings can be while they're taking the 7 steps.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <strong className="text-muted">Price:- 50000</strong>
        </Card.Footer>
      </Card>
    </CardGroup>

    <CardGroup className="mt-5 mb-5">
    
      <Card>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>Destination Weddings</Card.Title>
          <Card.Text>
          Putting it in very simple words ‘Destination weddings are the wedding ceremonies that are held in a location that is away from your hometown or the place of residence’. The idea behind getting married away from the hustle-bustle of your day-to-day life in the most exquisite locations is to celebrate your wedding beautifully & peacefully. This vacation cum wedding is the perfect stress-buster that you will need amidst the hassle of wedding planning.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <strong className="text-muted">Price:- 130000</strong>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title>Wedding Lawns</Card.Title>
          <Card.Text>
          The wedding lawns and farmhouses are almost always located in the suburbs at the far end of the city and are an appropriate choice for the couples who are all set to host more than 1000 guests at their wedding. Out of all the types of wedding venues available, the farmhouse wedding space is the most fun. It often turns out to be a mini destination wedding with the look and feel of the venue. They have rooms available for accommodation and the starry sky above with aesthetic lighting and gorgeous drapes of tents make a farmhouse wedding picturesque event space.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <strong className="text-muted">Price:- 150000</strong>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img6} />
        <Card.Body>
          <Card.Title>Banquet Halls </Card.Title>
          <Card.Text>
          Banquet halls are a dedicated event space that is used for celebrating various occasions like birthdays, anniversaries, weddings and even receptions. If you want it well-equipped with a group of trained staff who will take care of the on-spot coordination, catering, wedding decor, seating arrangement and so on while being an ideal indoor space to host a large number of people, we suggest you pick a banquet hall.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <strong className="text-muted">Price:- 100000</strong>
        </Card.Footer>
      </Card>
    </CardGroup>
    <BottomNav/>
    </div> 
  );
}

export default DecoreGalary;