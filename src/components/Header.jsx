import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={ styles.header }>
      <Link to="/" className={ styles.header__logo }>
        Nomada
      </Link>
      <nav className="header__navigation">
        <Link className={styles.header__link} to="/rooms">Rooms</Link>
        <Link className={styles.header__link} to="/register">Register</Link>
      </nav>
      <div> 
        <Link className={ styles.button } to="/login">Login</Link>
        <Link className={ styles.button__black } to="/register">Register</Link>
      </div>
    </header>
  )
}

export default Header;
