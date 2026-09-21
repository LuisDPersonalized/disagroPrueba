
import styles from "./CartaUsuario.module.css"
export function CartaUsuario(){
    return(
        <div className={styles.cartillaArea}>
            <form className={styles.cartillaConteneor}>
                    <label className={styles.categorias}>Nombre:</label>
                    <input className={styles.campos} name = "nombreInput"/>
                    <label className={styles.categorias}>Apellido:</label>
                    <input className={styles.campos} name = "apellidoInput"/>
                    <label className={styles.categorias}>Email:</label>
                    <input className={styles.campos} name = "apellidoInput"/>
                    <label className={styles.categorias}>Fecha y Hora:</label>
                    <input className={styles.campos} name = "fechaYHora" type = "datetime-local"/>
            </form>
        </div>
    );
}