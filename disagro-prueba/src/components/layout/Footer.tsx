import styles from './Footer.module.css';
export function Footer(){
    return(
        <footer className = {styles.footer}>
            <p className={styles.footerText}>Atención al cliente: 2223-2425</p>
        </footer>
    );
}