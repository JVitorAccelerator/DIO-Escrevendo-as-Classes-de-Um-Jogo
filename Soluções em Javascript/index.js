const readline = require('readline');

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve =>
    rl.question(query, answer => {
      rl.close();
      resolve(answer);
    })
  );
}



const tiposAtaque = {
    Mago: "Magia",
    Monge: "Artes Marciais",
    Ninja: "Shuriken",
    Guerreiro: "Espada",
};



class Hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    attack (){
        console.log(`o ${this.tipo} atacou usando ${tiposAtaque[this.tipo]} \n`);
        
    }   
}


async function main() {
    while (true){
        let continuar = await askQuestion(
            'Digite 0 para sair ou digite 1 para continuar:'
          );
        if (continuar==='0'){
            console.log('Programa encerrado.')
            break
        } else{
            let nome = await askQuestion('Digite o nome do seu herói:');
            let idade = parseInt(await askQuestion('Digite a sua idade:'));
            let tipo = await askQuestion('Digite o tipo do seu herói(Mago, Monge, Ninja, Guerreiro):');
            
            let char = new Hero(nome, idade, tipo);
            char.attack();
        }
    } 
}

main();