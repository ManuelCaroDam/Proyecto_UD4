export interface Categoria {
    nombreCategoria:                string;
    descripcionCategoria:           string;
}

export interface Usuario {
    nombreUsuario:                  string;
}



export interface ListaObjetosPerdidos {
    categoria:                      Categoria;
    descripcion:                    string;
    horario:                        string;
    municipio:                      string;
    direccionObjeto:                string;
    usuario:                        Usuario;
    
}