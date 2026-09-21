import { CartaProServ } from "../cartillas/CartaProServ.tsx";
import { CartaUsuario } from "../cartillas/CartaUsuario.tsx";
import style from './Ingreso.module.css';
export function Ingreso(){
    return(
        <div className={style.ingresoArea}>
            <div className={style.areaGeneral}>
                <div className={style.areaTitulo}>
                    <p className={style.circuloNumero}>1</p><p>Ingrese su información</p>
                </div>
                <CartaUsuario/>
            </div>
            <div className={style.areaGeneral}>
                <div className={style.areaTitulo}>
                    <p className={style.circuloNumero}>2</p><p>Seleccione servicios y productos de su interés</p>
                </div>
                <CartaProServ/>
                <button className={style.botonConfirmar}>Confirmar su asistencia <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></button>
            </div>
        </div>
    );
}