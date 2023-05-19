// Criando uma Calculadora de IMC - Meu primeiro projeto, fiz 70% sozinho tanto html,css e js. Duvidas surgiram com js. ChatGPT ajudou muito

// Primeiro: Criei um evento "DOMContentLoaded" ele vai carregar todo meu html,css primeiro e depois vai executar o bloco da function anonima
// a famosa function callback. Dentro do bloco da função anonima, criei variaveis a primeira variavel se chama mClick vai armazenar:
// o seletor do elemento lá do html. mClick vai armazenar o elemento #mulherbtn, hClick a segunda variavel vai armazenar o elemento #homembtn
// A terceira variavel se chama calcularButton e vai armazenar o elemento #calcular que é o id do meu button de calcular!
// A quarta variavel se chama buttonClick e vai armazenar 'null;' (um vazio ou NADA)

// Depois adicionei um evento pro mClick usando o (addEventListener), coloquei o evento 'click' com uma função de callback. Dentro do bloco da
// função, usei o this para se referir o evento no caso(mClick) então this está se referindo ao mClick. Quando o usuario clicar no botão mClick
// Vai mudar a cor do backgroud(this.style.backgroundColor = "COR") e também vai mudar a cor do texto(this.style.colo = "COR").
// Depois criei uma condição (if). Si buttonClick for diferente ou igual a null E se buttonClick for diferente ou igual a this
// Quando o usuario clicar no botão do (hclick) a cor da (mClick) vai voltar a que era antes. Então mudei a cor do backgroud do button:
// buttonClick.style.backgroundColor = "white";  e também mudei a cor da fonte para a fonte que era antes(Estava dando erro a cor da fonte
// da mulher tava virando a cor de fonte do homem, assim acontecia com o do homem . Quando eu clicava) Então troquei as cores de posição
// coloquei da mulher na do homem(Troquei nas condições) e do homem na mulher; Ai voltou ao normal! Resumindo: Com essa condição quando eu
// clicar no botão do homem a cor do botão da mulher vai voltar ao normal(Não vai ficar selecionada); E no final botei buttonClick = this;

// fiz a mesma coisa no hClick, mesmo evento e com a condição(para voltar a cor voltar ao normal quando eu clicar no botao da mulher)

// no calcularButton usei um evento 'mouseover' que significa "Quando o ponteiro do usuario passar em cima do elemento" também usei o this
// para se referir ao evento (calcularButton) então this.style.backgroundColor = "cor", quando o ponteiro do mouse do usuario passar em cima
// do elemento, vai mudar a cor pra cor definida em this.style.backgroundColor="cor".
// Também criei outro evento usando o calcularButton, mas usei o evento 'mouseout' que significa "Quando o ponteiro do usuario sair de cima do
// elemento". Quando o ponteiro do mouse do usuario sair de cima, vai trocar a cor novamente do botão. No this.style.backgroundColor="cor"
// so que no 'mouseout' coloquei a cor que era antes.

document.addEventListener('DOMContentLoaded', function() {
    let mClick = document.querySelector('#mulherbtn')
    let hClick = document.querySelector('#homembtn')
    let calcularButton = document.querySelector('#calcular');
    let buttonClick = null;


    mClick.addEventListener('click', function() {
        this.style.backgroundColor = "#993399";
        this.style.color = "white"

        if (buttonClick !== null && buttonClick !== this) {
            buttonClick.style.backgroundColor = "white";
            buttonClick.style.color = "rgb(0, 191, 255)"
        }
        buttonClick = this;
    });
    hClick.addEventListener('click', function() {
        this.style.backgroundColor = "rgb(0, 191, 255)"
        this.style.color = "white"

        if(buttonClick !== null && buttonClick !== this) {
            buttonClick.style.backgroundColor = "white"
            buttonClick.style.color = "#993399"
        }
        buttonClick = this;
    });
    
    calcularButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = "rgb(13, 77, 99)"
    });
    calcularButton.addEventListener('mouseout', function() {
        this.style.backgroundColor = "rgb(32, 195, 250)"
    })

});

// Criando eventos no botão clc e imc

// Criei uma função, chamando a ação que quero(no caso clc() está no evento onclick="clc()" lá no html) ação que quero é o clc()
// Dentro do bloco de codigo da function clc(){} criei a variavel idade para armazenar o elemento #txid. Usei Number para converter
// uma string em um numero e também botei .value falando que quero o valor do #txid;
// Criei também uma variavel chamada altura que vai armazenar o elemento #txalt. Usei parseFloat para virar numeros inteiros(com .<) também
// usei .value falando que eu quero o valor do #txalt  e no final coloquei /100; que o valor que o usuario colocar em #txalt vai ser divido por 100
// Converti os numeros da altura para numeros em metros!
// Criei uma variavel chamada peso para armazenar o elemento #txpeso. Usei parseFloat para converter numeros para numeros inteiros(com .<) também
// usei .value falando que eu quero o valor do #txpeso.

function clc() {  
    let idade = Number(document.querySelector('#txid').value);
    let altura = parseFloat(document.querySelector('#txalt').value) /100;
    let peso = parseFloat(document.querySelector('#txpeso').value);
    

    // Verificação valores válidos

    // Criei uma condição(if) lendo: Si altura for menor ou igual a 0 ou peso for menor ou igual a 0 ou idade menor ou igual a 0
    // vai mostrar um alerta na pagina que o usuario está! No caso, se o usuario não digitar NADA na idade,altura ou peso vai receber um alerta
    // Depois apaguei os elementos #txid, #txalt e #txpeso adicionando um valor de string vazia. Após o alerta quando o usuario clicar no ok
    // Os elementos vão ser apagados e ela vai ter que digitar novamente. Depois coloquei um return; Para finalizar essa condição
    if (altura <= 0 || peso <= 0 || idade <= 0) {
        alert("Por favor, insira valores válidos para idade, peso e altura.");

        // Estou colocando o valor de uma string vazia nos elementos, #txid, #txalt e #txpeso (.value = "";)
        document.querySelector('#txid').value = "";
        document.querySelector('#txalt').value = "";
        document.querySelector('#txpeso').value = "";
        return;
    }
    // Colocando condições para valores verdadeiros

    // Criei outra condição para o usuario digitar a idade dele até o número 100, se passar ele vai receber um alerta!
    // Coloquei o valor de um string vazia "" dos elemento #txid,#txalt e #txpeso. Quando o usuario clicar em ok do alerta, vai ser apagado
    // Oque ele digitou até no momento, coloquei um return para finalizar essa condição
    if (idade > 100) {
        alert("Por favor, insira sua idade verdadeira!");

        document.querySelector('#txid').value = "";
        document.querySelector('#txalt').value = "";
        document.querySelector('#txpeso').value = "";
        return;
    }
    // isNaN = Si o número não é um numero (Se o numero não é valido)
    // Si o numero não é valido da altura ou si a altura for menor ou igual a 0, o usuario vai receber um alerta.
    // Defini os valores vazio "" para os elementos #txid, #txalt e #txpeso com os valores de uma string vazia(.value = ""); Quando o usuario
    // clicar no ok do alerta vai apagar oque ele já digitou. Coloquei um return para finalizar essa condição
    if(isNaN(altura) || altura <= 0) {
        alert("Por favor, insira sua altura verdadeira!");

        document.querySelector('#txid').value = "";
        document.querySelector('#txalt').value = "";
        document.querySelector('#txpeso').value = "";
        return;
    }
    // isNaN = Si o número não é um numero (Se o numero não é valido)
    // Si o numero não é valido do peso ou si a peso for menor ou igual a 0, o usuario vai receber um alerta.
    // Defini os valores vazio "" para os elementos #txid, #txalt e #txpeso com os valores de uma string vazia(.value = ""); Quando o usuario
    // clicar no ok do alerta vai apagar oque ele já digitou. Coloquei um return para finalizar essa condição
    if(isNaN(peso) || peso <= 0) {
        alert("Por favor, insira seu peso verdadeiro!");

        document.querySelector('#txid').value = "";
        document.querySelector('#txalt').value = "";
        document.querySelector('#txpeso').value = "";
        return;
    }


    // Calculando IMC...
    
    // Criei uma variavel imc que vai armazenar a formula do imc que é: peso / (altura * altura) = peso divido (altura vezes altura)
    // também criei uma variavel res que vai armazenar o elemento #resultado
    // criei outra variavel chamada valor para armazenar uma string"Seu Resultado;"

    // Depois criei uma condição, para que o estilo lá do css fique aparecendo então:
    // Si valor() { } dentro do bloco de codigo do valor coloquei res.classList.remove('escondido') ele ta removendo a class .escondido do valor

    // Depois criei os valores do IMC que vão aparecer pro usuario vou ler alguns:
    // Si imc for menor que 18.5 vai receber uma res.innerHTML (vai escrever no html da pagina) meu res é uma div criada vazia lá no html
    // se não... Si imc tiver entre 18.5 e 29.9 vai receber uma res.innerHTML.

    let imc = peso / (altura * altura);
    let res = document.querySelector('#resultado');
    let valor = "Seu resultado;"

    if (valor) {
        res.classList.remove('escondido')
    }

    if(imc < 18.5) {
        res.innerHTML = `Você tem ${idade} anos. E está abaixo do peso. Seu IMC é: ${imc.toFixed(2)}`
    } else if (imc >= 18.5 && imc <= 24.9) {
        res.innerHTML = `Você tem ${idade} anos. E está com peso normal. Seu IMC é: ${imc.toFixed(2)}`
    } else if (imc >= 24.9 && imc <= 29.9) {
        res.innerHTML = `Você tem ${idade} anos. E está com sobrepeso. Seu IMC é: ${imc.toFixed(2)}`
    } else if (imc >= 29.9 && imc <= 34.9) {
        res.innerHTML = `Você tem ${idade} anos. E está com obesidade grau 1. Seu IMC é: ${imc.toFixed(2)}`
    } else if (imc >= 34.9 && imc <= 39.9) {
        res.innerHTML = `Você tem ${idade} anos. E está com obesidade grau 2. Seu IMC é: ${imc.toFixed(2)}`
    } else {
        res.innerHTML = `Você tem ${idade} anos. E está com obesidade grau 3. Seu IMC é: ${imc.toFixed(2)}`
    }
}