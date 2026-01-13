"use client";

import React from "react";
import classes from "./InputField.module.css";
import { InputFieldProps } from "./InputField.types";

export default function InputField({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  textarea = false,
  required = false,
}: InputFieldProps) {
  return (
    <div className={classes.formGroup}>
      <label htmlFor={id} className={classes.label}>
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          placeholder={placeholder}
          className={classes.textArea}
          value={value}
          onChange={onChange}
          required={required}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={classes.input}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
}
