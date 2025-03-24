
function baixaCurriculo() {
    var link = document.createElement('a');
            link.href = 'assets/curriculo.pdf'; 
            link.download = 'currículo-JamillyCuco.pdf'; 
            link.click();
}

function enviarEmail() {
    window.location.href = "mailto:jamillycuco@gmail.com";
}