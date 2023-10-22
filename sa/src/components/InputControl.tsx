import styles from "./InputControl.module.css";
import { InputProps } from "../type.ts";
export default function InputControl({ label, inputProps }: InputProps) {
    const {...props} = inputProps;
    return (<div className={styles.inputControl}>
        <label className={`${styles.label} ${props.required ? styles.labelRequired : ''}`} htmlFor={props.name && props.name}>{label}</label>
        <input className={styles.input}
               id={props.name && props.name}
               {...inputProps}
        />
    </div>);
}
