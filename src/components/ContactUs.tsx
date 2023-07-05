"use client";

import React, { useRef, SyntheticEvent, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isNameValid, setIsNameValid] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isMessageValid, setIsMessageValid] = useState<boolean>(false);

  const [messageSent, setIsMessageSent] = useState("");

  const handleButtonClick = () => {
    setIsMessageSent("Message sent successfully");
    setTimeout(() => {
      setIsMessageSent("");
    }, 7000); // 7 segundos en milisegundos
  };

  const sendEmail = (e: SyntheticEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_gefud4l",
          "template_skx8q7j",
          form.current,
          "BQXPwWgFdBm2WrBKO"
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
          },
          (error: EmailJSResponseStatus) => {
            console.log(error.text);
          }
        );
    }
  };

  const divInputClass =
    "w-full flex justify-center flex-col gap-2 sm:gap-3 text-ColorCeleste font-medium";
  const inputClass =
    "rounded p-2 px-3 bg-ColorAzulMarinoClaro text-ColorGrisClaro sm:text-xl";
  const labelClass = "text-base sm:text-xl  ";

  const validateName = (value: string) => {
    // Agrega aquí tu lógica de validación para el nombre
    // Por ejemplo, puedes verificar si el valor tiene una longitud mínima requerida
    setIsNameValid(value.length >= 2);
    if (isNameValid && isEmailValid && isMessageValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const validateEmail = (value: string) => {
    // Agrega aquí tu lógica de validación para el email
    // Por ejemplo, puedes utilizar expresiones regulares o librerías de validación
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      setIsEmailValid(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
      );
      if (isNameValid && isEmailValid && isMessageValid) {
        setIsFormValid(true);
      }
      return;
    }

    console.log(isEmailValid);

    setIsFormValid(false);
  };

  const validateMessage = (value: string) => {
    // Agrega aquí tu lógica de validación para el mensaje
    // Por ejemplo, puedes verificar si el valor tiene una longitud mínima requerida
    setIsMessageValid(value.length >= 10);
    if (isNameValid && isEmailValid && isMessageValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-10 w-11/12 md:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12"
      >
        <div className={divInputClass}>
          <label htmlFor="user_name" className={labelClass}>
            Name :
          </label>
          <input
            className={inputClass}
            type="text"
            name="user_name"
            id="user_name"
            onChange={(e) => validateName(e.target.value)}
          />
        </div>
        <div className={divInputClass}>
          <label htmlFor="user_email" className={labelClass}>
            Email :
          </label>
          <input
            className={inputClass}
            type="email"
            name="user_email"
            id="user_email"
            onChange={(e) => validateEmail(e.target.value)}
          />
        </div>
        <div className={divInputClass}>
          <label htmlFor="message" className={labelClass}>
            Message :
          </label>
          <textarea
            className={inputClass}
            name="message"
            id="message"
            onChange={(e) => validateMessage(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="border border-ColorCeleste rounded-md text-ColorCeleste py-2 mx-auto w-6/12 text-xl sm:text-2xl disabled:opacity-75 disabled:border-ColorGrisOscuro disabled:text-ColorGrisOscuro"
          disabled={!isFormValid}
          onClick={handleButtonClick}
        >
          Send
        </button>
      </form>
      <span className="text-ColorCeleste font-regula w-full h-7 text-center">
        {messageSent}
      </span>
    </>
  );
};

export default ContactUs;
