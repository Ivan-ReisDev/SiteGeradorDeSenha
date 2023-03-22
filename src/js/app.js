var $tamanhoSenha = document.querySelector('.valor');
var $p = document.querySelector('.senha');
var $senha = document.querySelector('.senha');
var $numeros = document.querySelector('#numeros');
var $especial = document.querySelector('#especial');
var $update = document.querySelector('.update');
var $span = document.querySelector('span');
var $copy = document.querySelector('.copy');
var $btn = document.querySelector('.btn');
var letras = ['a', 'q', 'w', 'r', 't', 'y', 'y', 'i', 'o', 'p', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'v', 'b', 'c', 'm', 'A', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B','N','M']
var numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var especial = ['!', '@', '#', '$', '%', '&', '(', ')', '-', '_']
var NumeroEspecial = [...letras, ...numeros, ...especial];
var LetraNumero = [...letras, ...numeros];
var LetrasEspecial = [...letras, ...especial];

function GeraNumero() {
    var numero = '';
    if ($numeros.checked == true & $especial.checked == true) {
        numero = Math.floor(Math.random() * NumeroEspecial.length)
    } else if ($especial.checked == true & $numeros.checked == false) {
        numero = Math.floor(Math.random() * LetrasEspecial.length)
    } else if ($numeros.checked == true & $especial.checked == false) {
        numero = Math.floor(Math.random() * LetraNumero.length)
    } else {
        numero = Math.floor(Math.random() * letras.length)
    }
    return numero
}

function GerarsenhaLetra() {
    $p.value = ''
    for (let i = 0; i < $tamanhoSenha.value; i++) {
        $p.value += letras[GeraNumero()]
    }
}

function GeraSenhaNumero() {
    $p.value = ''
    for (let i = 0; i < $tamanhoSenha.value; i++) {
        $p.value += LetraNumero[GeraNumero()]
    }
}

function GerarSenhaLetraNumero() {
    $p.value = ''
    for (let i = 0; i < $tamanhoSenha.value; i++) {
        $p.value += letras[GeraNumero()]
    }
}

function GerarSenhaNumeroEspecial() {
    $p.value = ''
    for (let i = 0; i < $tamanhoSenha.value; i++) {
        $p.value += NumeroEspecial[GeraNumero()]
    }
}

function GerarSenhaEspecial() {
    $p.value = ''
    for (let i = 0; i < $tamanhoSenha.value; i++) {
        $p.value += LetrasEspecial[GeraNumero()]
    }
}

function copy() {
    navigator.clipboard.writeText($senha.value).then(() => {
        alert('Senha copiada.')
    }) }

$tamanhoSenha.addEventListener('change', () => {
    $span.innerHTML = $tamanhoSenha.value;
    if ($numeros.checked == true & $especial.checked == true) {
        GerarSenhaNumeroEspecial()
    } else if ($especial.checked == true & $numeros.checked == false) {
        GerarSenhaEspecial()
    } else if ($numeros.checked == true & $especial.checked == false) {
        GeraSenhaNumero()
    } else {
        GerarsenhaLetra()
    }
})

$update.addEventListener('click',() => {
    if ($numeros.checked == true & $especial.checked == true) {
        GerarSenhaNumeroEspecial()
    } else if ($especial.checked == true & $numeros.checked == false) {
        GerarSenhaEspecial()
    } else if ($numeros.checked == true & $especial.checked == false) {
        GeraSenhaNumero()
    } else {
        GerarsenhaLetra()
    }
})

$copy.addEventListener('click', () => {
    copy()
})

$btn.addEventListener('click', () => {
    copy()
})
