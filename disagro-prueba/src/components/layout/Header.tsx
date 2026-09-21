import styles from './Header.module.css';
export function Header(){
    const currentYear  = new Date().getFullYear();
    return (
        <header className = {styles.header}>
            <p className = {styles.headerTitle}>Disagro</p>
            <p className = {styles.headerSubtitle}>Feria de promociones - {currentYear}</p>
        </header>
    );
}