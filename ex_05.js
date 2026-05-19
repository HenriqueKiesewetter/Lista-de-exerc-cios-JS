function parImpar(){

    let transforma=0;

    let numero=parseInt(prompt("Insira um número inteiro"));

    if(numero%2==0){
        console.log("Transformando número par em ímpar...");
        transforma=numero+1;
        console.log(transforma);
    }else{
        console.log("Transformando número ímpar em par...");
        transforma=numero+1;
        console.log(transforma);
    }

}