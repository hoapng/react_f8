import styles from "./Button.module.scss";
import clsx from 'clsx'

function Button({primary, disable}) {
    const classes = clsx(styles.btn, {
        [styles.primary]: primary, 
        [styles.disable]: disable, 
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
