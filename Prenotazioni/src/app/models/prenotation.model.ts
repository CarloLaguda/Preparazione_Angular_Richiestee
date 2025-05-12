export class prenotation
{
    nome: string
    cognome: string
    indirizzo: string
    telefono: number
    email: string
    data: string
    ora: string

    constructor(nome: string, cognome: string, indirizzo: string, telefono: number, email: string, data: string, ora: string )
    {
        this.nome = nome
        this.cognome = cognome
        this.indirizzo = indirizzo
        this.telefono = telefono
        this.email = email
        this.data = data
        this.ora = ora
    }

}