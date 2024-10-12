import styles from './Button.module.css';

function Button({ children, onClick, type}) {
  console.log({children});
  return (
    <div>
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
    </div>
  );
}

export default Button;