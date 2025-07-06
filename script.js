const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

const btnSomar = document.getElementById("somar");
const btnSubtrair = document.getElementById("subtrair");
const btnMultiplicar = document.getElementById("multiplicar");
const btnDividir = document.getElementById("dividir");

btnSomar.addEventListener("click", function() {
    const valor1 = parseFloat(num1.value);
    const valor2 = parseFloat(num2.value);

    if (isNaN(valor1) || isNaN(valor2)) {
        result.value = "Digite dois números válidos!";
        return;
    }

    result.value = valor1 + valor2;
});

btnSubtrair.addEventListener("click", function() {
    const valor1 = parseFloat(num1.value);
    const valor2 = parseFloat(num2.value);

    if (isNaN(valor1) || isNaN(valor2)) {
        result.value = "Digite dois números válidos!";
        return;
    }

    result.value = valor1 - valor2;
});

btnMultiplicar.addEventListener("click", function() {
    const valor1 = parseFloat(num1.value);
    const valor2 = parseFloat(num2.value);

    if (isNaN(valor1) || isNaN(valor2)) {
        result.value = "Digite dois números válidos!";
        return;
    }

    result.value = valor1 * valor2;
});

btnDividir.addEventListener("click", function() {
    const valor1 = parseFloat(num1.value);
    const valor2 = parseFloat(num2.value);

    if (isNaN(valor1) || isNaN(valor2)) {
        result.value = "Digite dois números válidos!";
        return;
    }

    if (valor2 === 0) {
        result.value = "Não é possível dividir por zero!";
        return;
    }

    result.value = valor1 / valor2;
});