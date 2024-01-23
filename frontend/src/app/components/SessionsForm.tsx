"use client";
import { useState } from "react";
import { getStrapiURL } from "../utils/api-helpers";
import styles from "./CustomForm.module.css";

export default function CustomForm() {
  const [name, setName] = useState("");
  const [emailPhone, setEmailPhone] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const token = process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN;

  async function handleSubmit() {
    if (name === "") {
      setErrorMessage("name cannot be blank.");
      return;
    }

    const res = await fetch(getStrapiURL() + "/api/sessions-forms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          name: name,
          emailPhone: emailPhone,
          description: description,
          view: "sesiones",
        },
      }),
    });

    if (!res.ok) {
      setErrorMessage("failed to submit.");
      return;
    }
    setErrorMessage("");
    setSuccessMessage("Enviado!");
    setName("");
    setEmailPhone("");
    setDescription("");
  }

  return (
    <div className="flex flex-row items-center self-center justify-center flex-shrink-0 lg:justify-end">
      <div className="flex flex-col">
        {successMessage ? (
          <p className="text-green-700 bg-green-300 px-4 py-2 rounded-lg">
            {successMessage}
          </p>
        ) : (
          <div>
            <div className="flex flex-row">
              <>
                <input
                  type="text"
                  placeholder="NOMBRE"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className={
                    "p-3 text-gray-700 sm:max-w-sm " +
                    styles.input +
                    " " +
                    styles.smw30
                  }
                />
              </>
            </div>

            <div className="flex flex-row">
              <>
                <input
                  type="text"
                  placeholder="MAIL Y TELÉFONO"
                  onChange={(e) => setEmailPhone(e.target.value)}
                  value={emailPhone}
                  className={
                    "p-3 text-gray-700 sm:max-w-sm " +
                    styles.input +
                    " " +
                    styles.smw30
                  }
                />
              </>
            </div>

            <div className="flex flex-row">
              <>
                <input
                  type="text"
                  placeholder="CUÉNTAME TU EVENTO"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  className={
                    "p-3 text-gray-700 sm:max-w-sm  " +
                    styles.input +
                    " " +
                    styles.smw30
                  }
                />
              </>
            </div>

            <div className="flex flex-row justify-center">
              <>
                <button
                  type="button"
                  className={
                    "w-2/5 p-3 font-semibold dark:bg-violet-400 dark:text-gray-900 " +
                    styles.button
                  }
                  onClick={handleSubmit}
                >
                  ENVÍAR
                </button>
              </>
            </div>
          </div>
        )}
        {errorMessage && (
          <p className="text-red-500 bg-red-200 px-4 py-2 rounded-lg my-2">
            {errorMessage}
          </p>
        )}
      </div>
      <div></div>
    </div>
  );
}
