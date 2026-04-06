class contaBancaria{
    #saldo = 0;
    constructor(titular){
        this.titular = titular;
    }
    
    depositar(valor){
        if (valor > 0){
            this.#saldo += valor;
            console.log(`Depósito de ${valor} feito`)
        }
    }
    
    sacar(valor){
        if(valor > 0 && valor <= this.#saldo){
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor} feito`);
        }
        else{
            console.log("Saldo insuficiente ou valor inválido.")
        }
    }
    exibirSaldo(){
        return `Olá, seu saldo é ${this.#saldo}`
    }
}

const conta1 = new contaBancaria("Meio Kilo");
conta1.depositar(1000)
conta1.depositar(1050)
conta1.depositar(1400)
conta1.depositar(1080)
conta1.depositar(2300)
conta1.sacar(1000)
conta1.sacar(200)
conta1.sacar(700)
console.log(conta1.exibirSaldo())