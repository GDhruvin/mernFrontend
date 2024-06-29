import { useState } from "react";
import Swal from 'sweetalert2'
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
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
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (response.status === 200) {
        // storeTokenInLS(responseData.token)
        Swal.fire({
          title: responseData.message,
          showConfirmButton: false,
          timer: 1500,
          icon: "success",
          customClass: {
            popup: 'larger-alert',
          },
        });
        navigate('/login')
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
          <h1 className="main-heading">Register page</h1>
        </div>

        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/src/images/image1.png" alt="contact" />
          </div>

          <section className="section-form">
            <form onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  required
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
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
                <label htmlFor="phone">phone</label>
                <input
                  type="number"
                  name="phone"
                  required
                  value={formData.phone}
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
                <button type="submit">Register</button>
              </div>
            </form>
          </section>
        </div>
      </section >
    </>
  );
}


