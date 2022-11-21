let usuarios = [];
var cards = document.getElementsByClassName("card");

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseover", function() {
        this.style.transform = "scale(1.02)";
    });

    cards[i].addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
    });
}

function mostrarAlerta(titulo) {
    alert(titulo);
}

function cadastrarUsuario() {
    let usuario = document.getElementById("email");
    let senha = document.getElementById("senha");
    let confirmar_senha = document.getElementById("confirmar_senha");

    if (senha.value != confirmar_senha.value) {
        alert("As senhas precisam ser iguais!");
        console.log('aaa')
        return;
    }

    let novo_usuario = {
        nome: usuario.value,
        senha: senha.value,
    }

    usuarios.push(novo_usuario);

    console.log(usuarios);
}