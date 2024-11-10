function calcularEstatisticas() {
    const input = document.getElementById("numeros").value;
    const numeros = input.split(",").map(num => parseFloat(num.trim()));

    if (numeros.some(isNaN)) {
        alert("Por favor, insira apenas números separados por vírgulas.");
        return;
    }

    let soma = 0;
    let maximo = numeros[0];
    let minimo = numeros[0];
    let pares = 0;
    let impares = 0;

    for(let i = 0;i < numeros.length;i++) {
        const numero = numeros[i];

        //soma para calcular a media
        soma += numero;

        //Calculo do maximo
        if (numero > maximo) {
            maximo = numero;
        }

        //calculo do minimo
        if (numero < minimo) {
            minimo = numero;
        }

        //condicional para pares e impares
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    //4. calculo da media
    const media = soma / numeros.length;

    //5. Exibição dos resultados
    document.getElementById("media").innerText = `Média: ${media}`;
    document.getElementById("maximo").innerText = `Maximo: ${maximo}`;
    document.getElementById("minimo").innerText = `Minimo: ${minimo}`;
    document.getElementById("pares").innerText = `Pares: ${pares}`;
    document.getElementById("impares").innerText = `impares: ${impares}`;
}