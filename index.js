class heroi{
    constructor (nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let ataque 

        switch (this.tipo) {
            case 'guerreiro':
                ataque = 'espada'
                break
            case 'mago': 
                ataque = 'magia'
                break
            case 'ninja':
                ataque = 'shuriken'
                break
            case 'monge':
                ataque = 'artes marciais'
                break 
        
            default:
                ataque = 'ataque desconhecido'
        }
        console.log (`O ${this.tipo} atacou usando ${ataque}`)
    }
    }
    heroi1 = new heroi ('Hayley', 30, 'ninja')
    heroi2 = new heroi ('Jake', 60, 'mago')
    heroi3 = new heroi ('Wayve', 36, 'monge')
    heroi4 = new heroi ('Bubu', 10, 'guerreiro')

    heroi1.atacar()
    heroi2.atacar()
    heroi3.atacar()
    heroi4.atacar()