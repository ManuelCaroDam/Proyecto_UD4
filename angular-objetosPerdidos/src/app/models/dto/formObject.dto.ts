import { Categoria } from "../interfaces/objetos-perdidos.interface";

export class FormObjectDto {
    tituloCategoria: string;
    descripcion: string;
    horario: string;
    municipio: string;
    direccionObjeto: string;
    
    constructor() {
        this.tituloCategoria = '';
        this.descripcion = '';
        this.horario = '';
        this.municipio = '';
        this.direccionObjeto = '';
    }

    
    
}