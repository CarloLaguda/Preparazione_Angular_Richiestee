export class Prenotation
{
    nome: string
    cognome: string
    indirizzo: string
    telefono: number
    email: string
    data:  Date
    ora: number

    constructor(nome: string, cognome: string, indirizzo: string, telefono: number, email: string, data:  Date, ora: number )
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

export interface Response
{
    id :number
}