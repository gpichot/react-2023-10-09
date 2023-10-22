import React from "react";
import styles from "./InputControl.module.scss";

interface InputControlProps extends React.ComponentPropsWithoutRef<"input">{
    name: string;
    label: string;
    mandatory?: boolean;
}

function InputControl(props: InputControlProps) {
    const {name, label, type = "string", mandatory = false, ...inputProps} = props;

    return (
        <div className={styles.inputControl} data-mandatory={mandatory}>
            <label htmlFor={name}>{label}</label>
            <input id={name}
                   name={name}
                   type={type}
                   required={mandatory}
                   {...inputProps}
            />
        </div>
    );
}

export default InputControl;