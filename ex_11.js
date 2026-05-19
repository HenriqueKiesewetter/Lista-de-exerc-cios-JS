function descontoINSS(){

    let salarioL=0;
    let desconto=0;

    let nome=prompt("Informe seu nome: ");
    let salarioB=parseFloat(prompt("Informe seu salário bruto: "));

    if(salarioB<=1000){
        desconto=salarioB*0.08;
    }else if(salarioB>1000 && salarioB<=1500){
        desconto=salarioB*0.085;
    }else{
        desconto=salarioB*0.09;
    }

    salarioL=salarioB-desconto;

    alert("Nome do funcionário: "+nome+"\n"+
        "Salário Bruto: "+salarioB+"\n"+
        "Valor do desconto do INSS: "+desconto.toFixed(2) +"\n"+
        "Salário líquido: "+salarioL.toFixed(2) );

}