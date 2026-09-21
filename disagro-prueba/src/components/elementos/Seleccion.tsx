interface SeleccionProps{
    id:number;
    nombre: string;
    precio: number;
    esProducto: number;
}

export function Seleccion({id,nombre,precio,esProducto}: SeleccionProps){
    <div>
        <label>
        <input type="checkbox" name="selectionBox" /> {nombre}
        </label>
        <label>{precio}</label>
    </div>
}