var permanente_clone = document.querySelector(".linha").cloneNode(true);

function adicionar_div() {
    var secao = document.getElementById("forma");
    var elementoclonado = secao.appendChild(permanente_clone.cloneNode(true));
}

function clonarLinha(botao) {
    var secao = botao.parentNode;
    var lista = secao.querySelector(".lista");
    var clone = lista.cloneNode(true);
    secao.appendChild(clone);
}

var estado = false;

function mudar_estado() {
    estado = !estado;
    var sections = document.querySelectorAll(".linha");
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
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
    }
}
