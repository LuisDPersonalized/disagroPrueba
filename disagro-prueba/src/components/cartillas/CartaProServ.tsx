import {Seleccion} from "../elementos/Seleccion";
import styles from "./CartaProServ.module.css"
import {useEffect, useState} from 'react';

interface Productos{
    id: number;
    nombre:string;
    precio:number;
    esServicio:boolean;
}
export function CartaProServ(){
    
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8081/ProductosServicios')
        .then (res => res.json())
        .then (data=>setData(data))
        .catch (err=> console.log(err))
    },[])

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
                <div>
                    {data.map ((d,i) => (
                        <div key={i}>
                            <Seleccion id={d.id} nombre={d.nombre} precio={d.precio} esProducto={d.esProducto}/>
                        </div>
                    ))}
                </div>
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