import { useState } from "react";
import axios from "axios";
import Form from "./Form";

const LoginField = () => {
  const [formData, setFormData] = useState({
    username : '',
    password : '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_PORT}/api/users/login`,
        formData
      );

      if (response.status === 200) {
        alert("Berhasil Login");
        console.log("Data berhasil dikirim:", response.data);
      } else {
        console.error("Kesalahan Dalam Login", response.data);
      }

      setFormData({
        username: "",
        password: "",
      });
    } catch (error) {
      console.error("Terjadi kesalahan saat mengirim data:", error);
    }
  };


  const fields = [
    { label: "Username", name: "username", type: "text", required: true },
    { label: "Password", name: "password", type: "text", required: true },
  ];

  return (
    <div className="bg-yellow-50">
        <Form
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          fields={fields}
        />
    </div>
  );
};

export default LoginField;
