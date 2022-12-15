function calcularIMC() {
    var altura= document.getElementById("altura").value;
    var peso= document.getElementById("peso").value;
    console.log(altura);
    console.log(peso);

    var IMC= peso/(altura**2)
    var IMC= IMC.toFixed(2); 
    console.log(IMC);

    if (IMC<18.5){
        var situacao= ". situação: magreza!";
    } else if (IMC>=18.5 && IMC<=24.9) {
        var situacao= ". Situação: normal!";
    } else if (IMC>=25 && IMC<=29.9) {
        var situacao= ". Situação: Sobrepeso";
    } else if (IMC>=30 && IMC<=34.9){
        var situacao= ". Situação: Obesidade grau I !";
    } else if (IMC>=35 && IMC<=39.9){
        var situacao= ". Situação: Obesidade grau II !";
    } else {
        var situacao= ". Situação: Obesidade grau III !";
    }
    console.log(situacao);


    document.getElementById("resultado").innerHTML= "Seu IMC é " + IMC + situacao; 
}
