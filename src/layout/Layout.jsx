import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={ styles.main }>
        { children }
      </main>
      <Footer />
    </>
  );
};

export default Layout;
