import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { useAuth } from "../store/auth";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  const { user } = useAuth();
  const userData = {
    username: "",
    email: ""
  }

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact us</h1>
        </div>

        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/src/images/image2.png" alt="contact" />
          </div>

          {(user) ? (<ContactForm userData={user} />) : <ContactForm userData={userData} />}
        </div>
      </section >
    </>
  );
}
