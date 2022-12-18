class Atleta {
    constructor(nome, idade, peso, altura, notas) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
      this.notas = notas;
      this.categoria;
      this.imc;
      this.mediaValida;
    }
  
    calculaCategoria() {
      if(this.idade >= 9 && this.idade <= 11) {
        this.categoria = "Infantil";
      } else if(this.idade >= 12 && this.idade <= 13) {
        this.categoria = "Juvenil";
      } else if(this.idade >= 14 && this.idade <= 15) {
        this.categoria = "Intermediário";
      } else if(this.idade >= 16 && this.idade <= 30) {
        this.categoria = "Adulto";
      } else {
        this.categoria = "Sem categoria";
      }
    }
  
    calculaIMC() {
      this.imc = this.peso / (this.altura * this.altura);
    }
  
    calculaMediaValida() {
      let matrizNotas = this.notas.sort(function(a, b){return a-b});
      
      matrizNotas = matrizNotas.slice(1, matrizNotas.length - 1);
  
      this.mediaValida = (matrizNotas[0] + matrizNotas[1] + matrizNotas[2]) / matrizNotas.length;
    }
  
    obtemNomeAtleta() {
      return this.nome;
    }
  
    obtemIdadeAtleta() {
      return this.idade;
    }
    
    obtemPesoAtleta() {
      return this.peso;
    }
  
    // Não solicitado
    obtemAlturaAtleta() {
      return this.altura;
    }
  
    obtemNotasAtleta() {
      return this.notas;
    }
  
    obtemCategoria() {
      return this.categoria;
    }
  
    obtemIMC() {
      return this.imc;
    }
  
    obtemMediaValida() {
      return this.mediaValida;
    }
  }
  
  const atleta = new Atleta("Cesar Abascal",
      30, 80, 1.70,
      [10, 9.34, 8.42, 10, 7.88]);
  
  atleta.calculaCategoria();
  atleta.calculaIMC();
  atleta.calculaMediaValida();
  
  console.log("Nome: " + atleta.obtemNomeAtleta());
  console.log("Idade: " + atleta.obtemIdadeAtleta());
  console.log("Peso: " + atleta.obtemPesoAtleta());
  console.log("Altura: " + atleta.obtemAlturaAtleta());
  console.log("Notas: " + atleta.obtemNotasAtleta());
  console.log("Categoria: " + atleta.obtemCategoria());
  console.log("IMC: " + atleta.obtemIMC());
  console.log("Média Válida: " + atleta.obtemMediaValida());