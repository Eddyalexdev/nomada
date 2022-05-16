import axios from 'axios';
import Layout from '../layout/Layout';
import { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const desloguear = async () => {
    const url = "http://localhost:3080/api/user/logout"
    await axios({
      url: url,
      method: "get"
    })
  }

  const loguear = async () => {
    const url = "http://localhost:3080/api/user/login"
    await axios({
      url: url,
      method: "post",
      data: {
        email: email,
        password: password
      }
    })
  }

  const handleLogin = () => {
    loguear();
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleLogout = () => {
    desloguear();
  }

  return (
    <Layout>
      <div className={ styles.login }>
        <h1 className={ styles.login__title }>Login</h1>
        <form onSubmit={(e) => e.preventDefault()} className={ styles.login__form }>
          <label className={ styles.login__box }>
            <span className={ styles.login__text }>Email:</span>
            <input onChange={handleEmail} type="email"/>
          </label>
          
          <label className={ styles.login__box }>
            <span className={ styles.login__text }>Password:</span>
            <input type="password" onChange={handlePassword}/>
          </label>

          <button type="submit" onClick={handleLogin}>Login</button>
          <button onClick={handleLogout}>Desloguear</button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
