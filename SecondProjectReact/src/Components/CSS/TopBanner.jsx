import Carousel from 'react-bootstrap/Carousel';
import b1 from "../image/b1.jpg";
import b2 from "../image/b2.jpg";
import b3 from "../image/b3.jpg";


const TopBanner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={b1} width="100%" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={b2} width="100%" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={b3} width="100%" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
export default TopBanner;
