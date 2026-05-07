const FORM_CADASTRAR = document.getElementById("form-cadastar")

if(FORM_CADASTRAR) {

    FORM_CADASTRAR.addEventListener("submit" , function(event){
        event.preventDefault() 

        const usuario ={
            nome : document.getElementById("nome").value,
            sobrenome : document.getElementById("sobrenome").value,
            email : document.getElementById("email").value, 
            senha : document.getElementById("senha").value,
            ddd : document.getElementById("ddd").value, 
            telefone : document.getElementById("telefone").value, 
            endereco : document.getElementById("endereco").value, 
            numero : document.getElementById("numero").value, 
            cidade : document.getElementById("cidade").value, 
            cep : document.getElementById("cep").value, 
            data_de_nascimeto : document.getElementById("data_de_nascimento").value, 
            genero : document.getElementById("genero").selectedOptions[0].text
            
        } 
        

        localStorage.setItem("usuarioCadastrado" , JSON.stringify(usuario)) 

        alert("Cadastro realizado com SUCESSO") 

        window.location.href="login-html"
 
    })





} 


// Parte do Login 

const FORM_LOGAR = document.getElementById("form-logar") 

if(FORM_LOGAR) {
    FORM_LOGAR.addEventListener("submit" , function(event){
        event.preventDefault() 

        const usuarioCadastrado = localStorage.getItem("usuarioCadastrado") 
    
        
        if(usuarioCadastrado){
            const usuarioEncontrado = JSON.parse(usuarioCadastrado) 

            
            var emailDigitado = document.getElementById("email").value 
            var senhalDigitado = document.getElementById("senha").value


       if(emailDigitado == usuarioEncontrado.email && senhalDigitado == usuarioEncontrado.senha){
            alert("Usuario encontrado com sucesso") 
            window.location.href = "index.html"
        } else {
            alert("Atencao email ou senha incorretos") 
        } 
    }else {
            alert("Nehum usuario encontrado")
        }


    })
}
