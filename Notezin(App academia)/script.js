var number = 0;
function criar_caixas(){
    
    var alfabeto =[
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
    ];
    var caixa = document.getElementById("forma")

    var espaco_section = document.createElement("section")
    espaco_section.id = "caixa" + number;
    caixa.appendChild(espaco_section);

    
    var tipo_treino = document.createElement("p");
    tipo_treino.innerHTML = alfabeto[number];
    espaco_section.appendChild(tipo_treino);

    var linhas_grupo = document.createElement("div");
    linhas_grupo.className = "linha";
    linhas_grupo.id = "linha"+ number;
    espaco_section.appendChild(linhas_grupo);
    
    
    var linhas = document.createElement("label");
    linhas.innerHTML = "Supino";
    linhas.className = "exercicio";
    linhas_grupo.appendChild(linhas);
    

    var input = document.createElement("input");
    linhas_grupo.appendChild(input);

    var puli = document.createElement("br");
    espaco_section.appendChild(puli);
    espaco_section.appendChild(puli);

    var add_ex = document.createElement("button");
    
    add_ex.setAttribute("onclick","criar_linhas(1)")
    add_ex.innerHTML = "Adicionar Exercício"
    espaco_section.appendChild(add_ex);



    number = number + 1;
    
}

function criar_linhas(linhaNum){

    var quallinha = document.getElementById("linha"+ (linhaNum-1) );

    var linha = document.createElement("label");
    var input = document.createElement("input");

    linha.innerHTML = "colocar";
   
    quallinha.appendChild(linha);
    quallinha.appendChild(input);
}

var estado  = false;
function mudar_estado() {

    estado = !estado;
    
    var sections = document.getElementsByClassName("linha");
    
    if(estado == true){
        for (var i = 0; i < sections.length; i++)
        {
            var section = sections[i];

            var label = section.querySelector(".exercicio");
            var input = document.createElement("input");
            input.value = label.textContent
            input.className = "exercicio"
            section.replaceChild(input, label);
        }
    }
    if(estado == false)
    {
        for (var i = 0; i < sections.length; i++)
            {
                section = sections[i];
                input = section.querySelector(".exercicio");

                label = document.createElement("label");
                label.innerHTML = input.value;
                label.className = "exercicio"
                
                section.replaceChild(label, input)
            }
    }
    
    
}
/*
var contadorElemento = document.getElementById('contador');

var contador = 0;

// Função que será chamada a cada frame
function atualizarContador() {
    // Incrementa o contador
    ;
    
    // Atualiza o texto do elemento
    contadorElemento.textContent;
    
    // Solicite o próximo frame
    requestAnimationFrame(atualizarContador);
}

// Inicie a chamada da função a cada frame
requestAnimationFrame(atualizarContador);*/