class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        if (this.tipo === "guerreiro"){
            console.log(`O ${this.tipo} atacou usando espada.`)
        }else if(this.tipo === "mago"){
            console.log(`O ${this.tipo} atacou usando magia.`)
        }else if(this.tipo === "monge"){
            console.log(`O ${this.tipo} atacou usando magia artes marciais.`)
        }else if(this.tipo === "ninja"){
            console.log(`O ${this.tipo} atacou usando shuriken.`)
        }            
    }
}

let heroi = new hero("Sunkat", 25, "guerreiro")
let heroi2 = new hero("Sarah", 31, "monge")
let heroi3 = new hero("Toku", 20, "mago")
let heroi4 = new hero("Foma", 23, "ninja")

heroi.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()