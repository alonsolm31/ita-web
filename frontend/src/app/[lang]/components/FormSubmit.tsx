"use client";
import { useState } from "react";
import { getStrapiURL } from "../utils/api-helpers";

export default function FormSubmit({
  placeholder,
  text,
}: {
  placeholder: string;
  text: string;
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const token = process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function handleSubmit() {
    if (date === "") {
      setErrorMessage("Date cannot be blank.");
      return;
    }

    let dateTime = formatDateTime(date, time);

    const res = await fetch(getStrapiURL() + "/api/lead-form-submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          datetime: dateTime,
          title: "LECTURA EXPRESS",
        },
      }),
    });

    if (!res.ok) {
      setErrorMessage("failed to submit.");
      return;
    }
    setErrorMessage("");
    setSuccessMessage("successfully submitted!");
    setDate("");
  }

  function formatDateTime(date: string, time: string) {
    return `${date} ${time}`;
  }

  return (
    <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
      <div className="flex flex-col">
        <div className="flex flex-row">
          {successMessage ? (
            <p className="text-green-700 bg-green-300 px-4 py-2 rounded-lg">
              {successMessage}
            </p>
          ) : (
            <>
              <input
                type="date"
                placeholder="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                className={"w-3/5 p-3 rounded-l-lg sm:w-2/3 text-gray-700"}
              />
            </>
          )}
        </div>

        <div className="flex flex-row">
          <>
            <input
              type="time"
              placeholder="time"
              onChange={(e) => setTime(e.target.value)}
              value={time}
              className={"w-3/5 p-3 rounded-l-lg sm:w-2/3 text-gray-700"}
            />
          </>
        </div>

        <button
          type="button"
          className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900"
          onClick={handleSubmit}
        >
          {text}
        </button>

        {errorMessage && (
          <p className="text-red-500 bg-red-200 px-4 py-2 rounded-lg my-2">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}
