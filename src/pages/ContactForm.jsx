import { useEffect, useState } from "react";
import Swal from 'sweetalert2'

export const ContactForm = (props) => {
    const user = props.userData
    const [formData, setFormData] = useState({
        username: user?.username,
        email: user?.email,
        message: '',
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
            const response = await fetch(`http://localhost:5000/api/auth/contact`, {
                method: "POST",
                headers: {
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

        <section className="section-form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="username">username</label>
                    <input
                        type="text"
                        name="username"
                        required
                        value={formData?.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData?.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="message">message</label>
                    <textarea
                        type="text"
                        name="message"
                        required
                        cols="45"
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <button type="submit">Contact</button>
                </div>
            </form>
        </section>

    );
}
