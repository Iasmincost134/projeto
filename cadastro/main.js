//Seleciona os elementos HTML
const form = document.querySelector('.cadastro-form');
const usuarioInput = form.querySelector("input[type='text']");
// const emailInput = form.querySelector("input[type='text']");
// const numeroInput = form.querySelector("input[type='tel']");
const senhaInput = form.querySelector("input[type='password']");


//Adiciona um ouvinte de eventos ao formulário para detectar quando o usuario clicar no botão
form.addEventListener('submit', (event) => {
    //Adicionar  event.preventDefault(); evita que a página seja recarregada quando o botão for apertado
    event.preventDefault();

    //Obtém os valores dos campos de entrada do usuario e senha  e o trim() remove os espaços em branco tanto no começo quanto no final de cada campo
    const usuario = usuarioInput.value.trim();
    // const numero = numeroInput.value.trim();
    // const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    //Verifica se os campos de usuario e senha estão preenchidos
    if(usuario === '' || senha === '' ){
        alert("Por favor, preencha os campos");
    }
    else if (usuario === 'usuario' && senha === 'senha'){
        //Verifica se as informações de login e senha estão corretas
        alert("Bem vindo!")
        location.replace("/tarefas/index.html", "_self")
    }
    else{
        //Exibe uma mensagem de erro se as informações estiverem erradas
        alert("Usuário ou senha incorreto, tente novamente")
    }
})
