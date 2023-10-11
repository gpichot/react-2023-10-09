import React from "react";

import styles from "./InputControl.module.scss";

export interface InputControlProps
  extends React.ComponentPropsWithoutRef<"input"> {
  /** Label de l'input */
  label: string;
}

export default function InputControl(props: InputControlProps) {
  const { id, name, label, ...inputProps } = props;
  return (
    <div className={styles.control}>
      <label htmlFor={id}>
        {label}
        {inputProps.required && "*"}
      </label>
      <input id={id} type="text" name={name} {...inputProps} />
    </div>
  );
}
