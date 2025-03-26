
function baixaCurriculo() {
    var link = document.createElement('a');
            link.href = 'assets/curriculo.pdf'; 
            link.download = 'currículo-JamillyCuco.pdf'; 
            link.click();
}

function enviarEmail() {
    window.location.href = "mailto:jamillycuco@gmail.com";
}

function enviarEmail2() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    let mailtoLink = `mailto:jamillycuco@gmail.com?subject=Contato de ${nome}&body=Nome: ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`;

    window.location.href = mailtoLink;
}