import { Link } from 'react-router-dom';
import Booking from './Booking';

const Hero = () => {
  return (
    <>
      <h1>hola que tal</h1>
      <p>este es el hotel que tenemos que hacer</p>
      <Link to="/">More Info</Link>
      <Booking />
    </>
  )
}

export default Hero;
