class Aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }
    calcular_media() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }

    obterStatus(){
        const media = this.calcular_media()

        if (media >= 7){
            return "Aprovado"
        }
        else if (media >= 5){
            return "Recuperação"
        }
        else{
            return "Reprovado"
        }
    }
}

let aluno1 = new Aluno("Meio Kilo", 55050, [8.0, 5.7, 9.9]);
console.log(aluno1.calcular_media());
console.log(aluno1.obterStatus());