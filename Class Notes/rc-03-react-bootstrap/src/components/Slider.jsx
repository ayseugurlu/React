import Carousel from 'react-bootstrap/Carousel';
import resim1 from "../img/slider01.jpg"
import resim2 from "../img/slider02.jpg"
import resim3 from "../img/slider03.jpg"



const Slider = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img width="100%" src={resim1} text="First slide" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width="100%" src={resim2} text="Second slide" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width="100%" src={resim3} text="Third slide" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slider