function escolherPicole() {

    let preco=0;
    let sabor="";

    let codigo = prompt("Sabores disponíveis:\n" +
        "Código Sabor Preço\n" +
        "a - Chocolate (R$ 1,50)\n" +
        "b - Morango (R$ 2,50)\n" +
        "c - Creme (R$ 2,50)\n" +
        "d - Manga (R$ 3,20)\n" +
        "e - Melancia (R$ 3,40)\n" +
        "f - Vanilla Ice (R$ 3,00)\n" +
        "g - Céu Azul (R$ 3,60)\n" +
        "h - Brownie (R$ 4,00)\n" +
        "i - Hawaiano (R$ 5,00) \n" +
        "Digite o código do picolé ( de 'a' até 'i'):");

    switch (codigo){
        case "a":
            sabor="chocolate"; preco=1.50

        case "b": 
            sabor="Morango"; preco=2.50; 
            break;

        case "c":
            sabor="Creme"; preco=2.50;
            break;

        case "d":
            sabor="Manga"; preco=3.20; 
            break;

        case "e":
            sabor="Melancia"; preco=3.40; 
            break;

        case "f":
            sabor="Vanilla Ice"; preco=3.00; 
            break;

        case "g":
            sabor="Céu Azul"; preco=3.60; 
            break;

        case "h":
            sabor="Brownie"; preco=4.00; 
            break;

        case "i":
            sabor="Hawaiano"; preco=5.00;
            break;

        default:
            alert("Código inválido!");
    }

    alert("Sabor: " + sabor + "\nPreço: R$ " + preco.toFixed(2));
}