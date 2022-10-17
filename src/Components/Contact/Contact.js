import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { message } from "antd";
import "./style.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ilsp35e",
        "template_h05nd1s",
        form.current,
        "vpyQVV0ZFmKQ_E58Y"
      )
      .then(
        (result) => {
          // console.log(result);
          message.success("Message has been sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <form ref={form} onSubmit={sendEmail}>
        <h2>Send me a massege!</h2>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
