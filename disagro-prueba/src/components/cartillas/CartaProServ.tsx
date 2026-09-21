import {useState} from 'react';
import {Seleccion} from "../elementos/Seleccion";
import styles from "./CartaProServ.module.css"

export function CartaProServ(){
    const [query, setQuery] = useState("");
    return (
        <div className={styles.cartillaArea}>
            <div className={styles.areaBusqueda}>
                <div className={styles.contenedorBuscador}>
                    <input className={styles.buscador} type = "text" placeholder="Buscar servicios y productos" onChange={e=>setQuery(e.target.value)}/>
                    <span className={styles.imagenBuscador}>⌕</span>
                </div>
                
            </div>
            <div className={styles.areaSelecciones}>
                <span>Servicios y/o Productos seleccionados:</span>
                <div></div>
            </div>
            <div className={styles.descuentos}>
                <div className={styles.areaDescuento}>
                    <span>Descuento obtenido en Servicios</span>
                    <span className={styles.porcentual}>porcentaje %</span>
                </div>
                <div className={styles.areaDescuento}>
                    <span>Descuento obtenido en Productos</span>
                    <span className={styles.porcentual}>porcentaje %</span>
                </div>
            </div>
        </div>
    );
}