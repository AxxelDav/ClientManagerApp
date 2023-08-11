import { Factura } from "src/app/facturas/models/factura";
import { Region } from "./region";

export class Cliente {
    id: number;
    nombre: string;
    apellido: string;
    createAt: string;
    email: string;
    region: Region;
    facturas: Array<Factura> = [];
}
