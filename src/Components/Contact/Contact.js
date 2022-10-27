import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { message } from "antd";
import { RiMailSendFill, RiPhoneLine } from "react-icons/ri";

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
      <div className="grid">
        <div className="contact-tools">
          <h3>You can contact me via :</h3>
          <i>
            <RiPhoneLine /> +966563864747
          </i>
          <i>
            <RiMailSendFill /> rababyousef1414@gmail.com
          </i>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <h2>Send me a massege!</h2>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" className="button" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
