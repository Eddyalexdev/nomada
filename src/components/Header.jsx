import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={ styles.header }>
      <div className="header__logo">
        <Link to="/">
          <span>Nomada</span>
        </Link>
      </div>
      <nav className="header__navigation">
        <Link className={styles.header__link} to="/rooms">Rooms</Link>
        <Link className={styles.header__link} to="/login">Login</Link>
        <Link className={styles.header__link} to="/register">Register</Link>
      </nav>
    </header>
  )
}

export default Header;
