import styles from "./Navbar.module.css";

export default function Navbar({ setSection }) {
  return (
    <nav className={styles.navbar}>
      <button onClick={() => setSection("participantes")} className={styles.navButton}>Participantes</button>
      <button onClick={() => setSection("direcciones")} className={styles.navButton}>Direcciones IP</button>
      <button onClick={() => setSection("conexiones")} className={styles.navButton}>Conexiones</button>
      <button onClick={() => setSection("switch")} className={styles.navButton}>Configuración Switch</button>
      <button onClick={() => setSection("router")} className={styles.navButton}>Configuración Router</button>
      <button onClick={() => setSection("servidor")} className={styles.navButton}>Configuración Servidor</button>
      <button onClick={() => setSection("esquema")} className={styles.navButton}>Esquema de red</button>
    </nav>
  );
}
