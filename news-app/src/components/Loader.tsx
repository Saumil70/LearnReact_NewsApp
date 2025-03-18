import styles from "../assets/css/loader.module.css";

function Loader() {
  return (
    <div className={`${styles.loader}`}>
      <img src="src/components/__Iphone-spinner-1.gif" alt="Loading..." />
    </div>
  );
}

export default Loader;
