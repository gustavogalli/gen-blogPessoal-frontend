import { Usuario } from "./usuario"

export class Postagem{
    public id: number
    public titulo: string
    public texto: string
    public data: Date
    public usuario: Usuario
}