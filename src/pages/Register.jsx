import { useEffect, useState } from "react";
import Layout from '../layout/Layout';
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const usersData = async () => {
    const url = "http://localhost:3080/api/users";

    await axios({
      url: url,
      method: "post",
      data: {
        name: name,
        lastname: lastName,
        image: image,
        phone: phone,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      },
    });
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleClick = () => {
    usersData();
  };

  return (
    <Layout>
      <h1>Register Users</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label className="space">
          <span>Nombre:</span>
          <input type="text" onChange={handleName} />
        </label>
        <label className="space">
          <span>Apellido:</span>
          <input type="text" onChange={handleLastName} />
        </label>
        <label className="space">
          <span>Imagen:</span>
          <input type="text" onChange={handleImage} />
        </label>
        <label className="space">
          <span>Telefono:</span>
          <input type="text" onChange={handlePhone} />
        </label>
        <label className="space">
          <span>Email:</span>
          <input type="text" onChange={handleEmail} />
        </label>
        <label className="space">
          <span>Password:</span>
          <input type="text" onChange={handlePassword} />
        </label>
        <label className="space">
          <span>Confirm Password:</span>
          <input type="text" onChange={handleConfirmPassword} />
        </label>
        <button onClick={handleClick} type="submit">
          Registrar
        </button>
      </form>
    </Layout>
  );
};

export default Register;
