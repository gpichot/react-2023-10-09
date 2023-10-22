import {InputControlPropsAsInterface} from './types.ts';
import styles from './PokemonForm.module.scss';

export default function InputControl(props: InputControlPropsAsInterface) {

    const {id, label, value, ...inputProps} = props;

    return (
        <div className={styles.form_element}>
            <label htmlFor={id} className={inputProps.required ? styles.required : ''}>{label}</label>
            <input aria-label={id} id={id} className={styles.form_input} type={"text"} value={value} required={inputProps.required} onChange={inputProps.onChange} onClick={inputProps.onClick} placeholder={inputProps.placeholder}/>
        </div>
    );
}

