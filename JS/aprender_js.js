

// Banco de dados 
const nomeUsuario1 = "user@gmail.com"
const senhaUsuario1 = "123456"

const nomeUsuario2 = "user2@gmail.com"
const senhaUsuario2 = "123456"


// Variaveis de login
let nomeDigitado = prompt("Diigite o seu email:")
let nomeSenha = prompt("Diigite o sua senha:")

// Verificacao de login 
if (nomeDigitado === nomeUsuario1 && senhaUsuario1 === senhaUsuario1)
{
    alert("login bem-sucedido! bem-vindo," + nomeUsuario1 + "!")
}else if(nomeDigitado === nomeUsuario2 && senhaUsuario1 === senhaUsuario2)
{
    alert("login bem-sucedido! bem-vindo," + nomeUsuario1 + "!")
}else{
    
    alert("login falhou! Email ou senha incorretas")
    document.body.classList.add("acesso_negado")
    document.getElementById("banner__image").src = "imagens_tiasonia/acesso-negado-img.png"
} 






/*
let idadeUsuario = prompt("Digite sua idade")
let RendaUsuario = prompt("Digite a sua renda") 


if(idadeUsuario >= 18 && RendaUsuario >= 1000){

    alert("Usuario pode entrar")
}else if(idadeUsuario <= 18 && RendaUsuario <= 1000){

    alert("infelizmente nao pode acessar")
}
*/ 



