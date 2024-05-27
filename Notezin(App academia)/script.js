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
    
    

    var espace_sections = document.getElementById("forma");
    var section = document.createElement("section");
    var tipo_treino = document.createElement("p");
    var linhas_grupo = document.createElement("div");
    var linhas = document.createElement("input");
    var input = document.createElement("input");
    var add_ex = document.createElement("button");


   
    linhas_grupo.id = "linha"+ number;

    linhas.innerHTML = "colocar";
    add_ex.innerHTML = "Adicionar Exercício";
    tipo_treino.innerHTML = alfabeto[number];

    section.className = "secao";
    linhas_grupo.className = "linha_grupo";
    linhas.className = "exercicio";
    input.className = "input";


    section.appendChild(tipo_treino);
    espace_sections.appendChild(section);
    section.appendChild(linhas_grupo);
    section.appendChild(add_ex);

    add_ex.setAttribute("onclick","criar_linhas("+number+"); manter_mudado();")
    criar_linhas(number)

    number = number + 1;

}

function criar_linhas(linhaNum ){
    
    var quallinha = document.getElementById("linha"+ (linhaNum) );
    
    var label = document.createElement("input");
    var input = document.createElement("input");
    //var puli = document.createElement("br");

    label.placeholder = "colocar exercicio"

    input.className = "input";
    label.className = "exercicio";

    label.innerHTML = "colocar";
    
   
    
    quallinha.appendChild(label);
    quallinha.appendChild(input);
    //quallinha.appendChild(puli);
    
}


var estado = false;
function mudar_estado() {
    estado = !estado;
    manter_mudado();
    
}

    

function manter_mudado(){

    
    var exercicios = document.querySelectorAll(".exercicio");
    var exercicios_edit = document.querySelectorAll(".exercicio_editando")
    
    if(estado == true){
        for (var a = 0; a < exercicios.length; a++){
            var exercicio = exercicios[a];
            
            exercicio.className = "exercicio_editando";
        }
    }
    else{
        for (var a = 0; a < exercicios_edit.length; a++){
            var exercicio_edit = exercicios_edit[a];
            
            exercicio_edit.className = "exercicio";
        }
    }
    
    
    
    
}  
    
    
    /*
    var label = section.querySelector(".exercicio");
        if (estado) {
            var input = document.createElement("input");
            input.value = label.textContent;
            input.className = "exercicio";
            section.replaceChild(input, label);
        } else {
            var novo_label = document.createElement("label");
            novo_label.textContent = label.value;
            novo_label.className = "exercicio";
            section.replaceChild(novo_label, label);
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