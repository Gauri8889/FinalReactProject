import { useState, useEffect } from "react";
import axios from "axios";
import editimg from "../images/edit.png";
import delimg from "../images/delete.png";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [mydata, setMydata] = useState([]);
  const navigate = useNavigate();

  const loadData = () => {
    let api = "http://localhost:3000/student";
    axios.get(api).then((res) => {
      console.log(res.data);
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const myRecDel = (id) => {
    let api = `http://localhost:3000/student/${id}`;
    axios.delete(api).then((res) => {
      message.error("Your record was successfully deleted!");
      loadData();
    });
  };

  const myEdit = (id) => {
    navigate(`/editrec/${id}`);
  };

  const ans = mydata.map((key) => (
    <tr key={key.stdid}>
      <td>{key.stdid}</td>
      <td>{key.name}</td>
      <td>{key.course}</td>
      <td>{key.fees}</td>
      <td>
        <a href="#" onClick={() => myEdit(key.stdid)}>
          <img src={editimg} alt="Edit" width="30" height="30" />
        </a>
        <a href="#" onClick={() => myRecDel(key.stdid)}>
          <img src={delimg} alt="Delete" width="30" height="30" />
        </a>
      </td>
    </tr>
  ));

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1 style={{ color: "green",marginTop:"50px" }}>Update Student Records</h1>
      <table
        style={{
          width: "80%",
          margin: "20px auto",
          borderCollapse: "collapse",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        }}
      >
        <thead style={{ backgroundColor: "#f8f9fa" }}>
          <tr>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>
              STD ID
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>
              Name
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>
              Course
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>
              Fees
            </th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </div>
  );
};

export default Update;
