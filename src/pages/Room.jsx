import Layout from "../layout/Layout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Room = () => {
  let params = useParams();
  const url = `http://localhost:3080/api/rooms/${params.id}`;
  const [room, setRoom] = useState([]);

  useEffect(() => {
    axios(url, {
      method: "get",
    })
      .then((data) => setRoom(data.data[0]))
      .catch((error) => new Error(error));
  }, []);
  console.log(room);
  return (
    <Layout>
      <h1>{ room.name }</h1>
      <h2>{ room.location }</h2>
      <p>{ room.price }</p>
      <img src="https://assets.architecturaldigest.in/photos/60084dd6cce5700439e12bf7/16:9/w_2560%2Cc_limit/modern-living-room-decor-1366x768.jpg" alt="room" />
      <p>{ room.description }</p>
    </Layout>
  );
};

export default Room;
