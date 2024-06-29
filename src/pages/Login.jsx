import { useState } from "react";
import Swal from 'sweetalert2';
import { useAuth } from "../store/auth";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const {storeTokenInLS} = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (response.status === 200) {
        storeTokenInLS(responseData.token);
        Swal.fire({
          title: responseData.message,
          showConfirmButton: false,
          timer: 1500,
          icon: "success",
          customClass: {
            popup: 'larger-alert',
          },
        }).then(() => {
          navigate('/');
        })
      }
      else if (response.status === 400) {
        Swal.fire({
          title: responseData.message,
          showConfirmButton: false,
          timer: 1500,
          icon: "info",
          customClass: {
            popup: 'larger-alert',
          },
        });
      }
      else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: responseData.message,
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: 'larger-alert',
          },
        });
      }
    }
    catch (error) {
      console.log(error);
    }


  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Log-In</h1>
        </div>

        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/src/images/image1.png" alt="contact" />
          </div>

          <section className="section-form">
            <form onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <button type="submit">Log -In</button>
              </div>
            </form>
          </section>
        </div>
      </section >
    </>
  );
}