const form = document.getElementById('formContato')
form.addEventListener('submit', e => {
    e.preventDefault()
})

const tel = document.getElementById('celular') // Seletor do campo de telefone

tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor // Insere o(s) valor(es) no campo
}

const cnpj = document.getElementById('cpfCnpj');
cnpj.addEventListener('keypress', (e) => mascaraCNPJ(e.target.value)) // Dispara quando digitado no campo
cnpj.addEventListener('change', (e) => mascaraCNPJ(e.target.value)) // Dispara quando autocompletado o campo

const mascaraCNPJ = (valor) => {
    let tamanho = cnpj.length;
    if(tamanho <= 11){
        valor = valor.replace(/\D/g, "")
        valor = valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
        cnpj.value = valor // Insere o(s) valor(es) no campo
    } else {
        valor = valor.replace(/\D/g, "")
        valor = valor.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
        cnpj.value = valor // Insere o(s) valor(es) no campo
    }
    
}


function sendEmail() {
    let nome = document.getElementById('nomeCompleto').value;
    let CPF = document.getElementById('cpfCnpj').value;;
    let nascimento = document.getElementById('dtNascimento').value;;
    let celular = document.getElementById('celular').value;
    let email = document.getElementById('email').value;;
    let termoAceite = document.getElementById('autorizacao').value;

    let corpo = 
            `Nome Completo: ${nome};%0D%0A%0D%0CPFCNPJ: ${CPF};%0D%0A%0D%0Dt. Nascimento: ${nascimento};%0D%0A%0D%0Celular: ${celular};%0D%0A%0D%0email: ${email};%0D%0A%0D%0Autorizo o cadastro dos meus dados para que um consultor da Nossagente entre em contato comigo.
            `
    let teste = document.getElementById('email');   
    teste.href= 'mailto:sac@nossagentecard.com.br?subject=Formulário%20NossaGente&body=' + corpo
    teste.click();
 
}