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
    let tamanho = cnpj.value.length;
    if(tamanho <= 14){
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
    let nascimento = document.getElementById('dtNascimento').value;
    let celular = document.getElementById('celular').value;
    let email = document.getElementById('email').value;;
    let termoAceite = document.getElementById('autorizacao').value;

    nascimento = nascimento.slice(8,10) + '/' + nascimento.slice(5,7) + '/' + nascimento.slice(0,4);

    let corpo = `Nome Completo: ${nome};%0D%0A%0D%0 CPFCNPJ: ${CPF};%0D%0A%0D%0 Dt. Nascimento: ${nascimento};%0D%0A%0D%0 Celular: ${celular};%0D%0A%0D%0 E-mail: ${email};%0D%0A%0D%0 Autorizo o cadastro dos meus dados para que um consultor da Nossagente entre em contato comigo.`
    let emailLink = document.getElementById('emailLink');   
    emailLink.href= 'mailto:sac@nossagentecard.com.br?subject=Formulário%20NossaGente&body=' + corpo
    emailLink.click();
 
}