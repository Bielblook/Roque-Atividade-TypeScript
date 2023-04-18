class Empregado {
    private nome: string;
    private sobrenome: string;
    private cpf: string;
    
    constructor(nome: string, sobrenome: string, cpf: string) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.cpf = cpf;
    }
    
    vencimento(): number {
      // implementação genérica para cálculo do vencimento
      return 0;
    }
    
    getNome(): string {
      return this.nome;
    }
    
    getSobrenome(): string {
      return this.sobrenome;
    }
    
    getCPF(): string {
      return this.cpf;
    }
  }
  
  class Assalariado extends Empregado {
    private salario: number;
    
    constructor(nome: string, sobrenome: string, cpf: string, salario: number) {
      super(nome, sobrenome, cpf);
      this.salario = salario;
    }
    
    vencimento(): number {
      return this.salario;
    }
  }
  
  class Comissionado extends Empregado {
    private totalVenda: number;
    private taxaComissao: number;
    
    constructor(nome: string, sobrenome: string, cpf: string, totalVenda: number, taxaComissao: number) {
      super(nome, sobrenome, cpf);
      this.totalVenda = totalVenda;
      this.taxaComissao = taxaComissao;
    }
    
    vencimento(): number {
      return this.totalVenda * this.taxaComissao;
    }
  }
  
  class Horista extends Empregado {
    private precoHora: number;
    private horasTrabalhadas: number;
    
    constructor(nome: string, sobrenome: string, cpf: string, precoHora: number, horasTrabalhadas: number) {
      super(nome, sobrenome, cpf);
      this.precoHora = precoHora;
      this.horasTrabalhadas = horasTrabalhadas;
    }
    
    vencimento(): number {
      return this.precoHora * this.horasTrabalhadas;
    }
  }
  