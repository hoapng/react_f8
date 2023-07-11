import styles from "./Button.module.css";
import clsx from 'clsx'

function Button({primary}) {
    const classes = clsx(styles.btn, {
        [styles.primary]: primary, 
        'd-flex': true
    })
  return (
    <>
    <button
      className={classes}
    >
      Button
    </button>
    </>
    
  );
}

export default Button;
