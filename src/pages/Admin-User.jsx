import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useNavigate } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import Swal from "sweetalert2";

export const AdminUser = () => {
  const navigate = useNavigate();
  const { authorizatioToken } = useAuth();
  const [users, setUser] = useState([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const [id, setID] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getAllUserData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizatioToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data)
      }
      else {
        navigate('/')
      }
    }
    catch (error) {
      console.log('Error in fetch');
    }
  }
  useEffect(() => {
    getAllUserData();
  }, [])

  const UpdateUser = (data) => {
    setOpen(true);
    setID(data._id);
    setFormData({
      ...formData,
      username: data.username,
      email: data.email,
      phone: data.phone,
    })
  }

  const handleFormSubmit = async (e) => {
    setOpen(false)
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/admin/users/update/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: authorizatioToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (response.status === 200) {
        Swal.fire({
          title: responseData.message,
          showConfirmButton: false,
          timer: 1500,
          icon: "success",
          customClass: {
            popup: 'larger-alert',
          },
        });
        getAllUserData();
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


  const DeleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizatioToken,
        },
      });
      const data = await response.json();
      if (response.ok) {
        Swal.fire({
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
          icon: "success",
          customClass: {
            popup: 'larger-alert',
          },
        });
        getAllUserData();
      }
      else {
        Swal.fire({
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
          icon: "info",
          customClass: {
            popup: 'larger-alert',
          },
        });
      }
    }
    catch (error) {
      console.log('Error in fetch');
    }
  }
  // console.log("authorizatioToken >>",data);
  return (
    <>
      <Dialog open={open} PaperProps={{ style: { width: '500px', maxHeight: '80vh' } }}>
        <DialogTitle style={{ backgroundColor: '#2196f3', color: '#fff', padding: '20px', fontSize: '1.2rem' }}>Update User</DialogTitle>
        <DialogContent>
          <form onSubmit={handleFormSubmit}>
            <div style={{ margin: '20px 0' }}>
              <TextField
                id="username"
                label="Username"
                type="text"
                name="username"
                required
                value={formData?.username}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
              />
            </div>
            <div style={{ margin: '20px 0' }}>
              <TextField
                id="email"
                label="Email"
                type="email"
                name="email"
                required
                value={formData?.email}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
              />
            </div>
            <div style={{ margin: '20px 0' }}>
              <TextField
                id="phone"
                label="Phone"
                type="number"
                name="phone"
                required
                value={formData?.phone}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
              />
            </div>
            <div>
              {/* <button type="submit">Contact</button> */}
              <DialogActions>
                <Button onClick={handleClose} style={{ color: '#f44336' }}>Cancel</Button>
                <Button type="submit" style={{ backgroundColor: '#4caf50', color: '#fff' }}>Update</Button>
              </DialogActions>
            </div>
          </form>

        </DialogContent>
      </Dialog>


      <section id="">
        <div className="container-content content">
          <h1>Admin User page</h1>

          <div className="user-table-container mt-10">
            <table className="user-table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Admin</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user._id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.isAdmin ? 'Yes' : 'No'}</td>
                    <td><Button variant="contained" color="success" onClick={(e) => { UpdateUser(user) }}>
                      Edit
                    </Button></td>
                    <td>
                      <Button variant="contained" color="error" onClick={(e) => { DeleteUser(user._id) }}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
