function somarNumeros() {
    let soma = 0;
    let continuar = true;

    while(continuar) {
        let numero = parseFloat(prompt("digitr um número (ou digite 0 para finalizar):"));
        if(!isNaN(numero)) {
            soma += numero;
        } else {
            alert("por favor, digite um numero valido");
        }
        continuar = confirm("deseja adicionar mais numeros?");
    }
    alert("a soma dos numeros é: " + soma);
}